import { useState, useEffect, useRef, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Cal from '@calcom/embed-react'

/* Formspree: submissions arrive at partnerships@varosync.com; the payload's
   email field becomes reply-to. */
const FORM_ENDPOINT = 'https://formspree.io/f/mnpnqedw'

/* Cloudflare Turnstile. Public TEST key — always passes. To make it real:
   Cloudflare dashboard -> Turnstile -> Add widget -> hostname varosync.com
   (add localhost too for dev) -> widget mode MANAGED -> paste the site key
   here. With appearance 'interaction-only' below, a normal person sees
   nothing; the checkbox appears only when Cloudflare distrusts the browser. */
const TURNSTILE_SITE_KEY = '1x00000000000000000000AA'

const CAL_LINK = 'varosync/intro'
const CAL_NAMESPACE = 'intro'

const INDUSTRIES: Array<[string, string[]]> = [
  ['Capital markets', [
    'Hedge fund',
    'Investment banking',
    'Equity research',
    'Private equity',
    'Private credit',
    'Venture capital',
    'Royalty or structured finance',
  ]],
  ['Biopharma', [
    'Biotechnology',
    'Pharmaceuticals',
    'Diagnostics or device developer',
  ]],
  ['Research and manufacturing services', [
    'CRO',
    'CDMO',
    'Clinical laboratory or reference lab',
    'Data or research provider',
  ]],
  ['Payers and pharmacy', [
    'Payer or health plan',
    'PBM or specialty pharmacy',
    'Provider or health system',
  ]],
  ['Other', [
    'Academic or research institution',
    'Consulting',
    'Law firm',
    'Government or regulatory',
    'Other',
  ]],
]

const HONEYPOTS = ['website', 'company', 'subject', 'message', 'fax', 'address']

type Fields = { email: string; name: string; org: string; industry: string; role: string; decision: string }
const EMPTY: Fields = { email: '', name: '', org: '', industry: '', role: '', decision: '' }

declare global {
  interface Window { turnstile?: any }
}

const GetInTouch = () => {
  const [f, setF] = useState<Fields>(EMPTY)
  const [tried, setTried] = useState(false)
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [token, setToken] = useState('')
  const [captchaUp, setCaptchaUp] = useState(false)
  const [calState, setCalState] = useState<'loading' | 'ready' | 'failed'>('loading')
  const capRef = useRef<HTMLDivElement>(null)
  const widget = useRef<string | null>(null)

  useEffect(() => {
    document.title = 'Varosync - Get in touch'
  }, [])

  useEffect(() => {
    const SCRIPT_ID = 'cf-turnstile'
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement('script')
      s.id = SCRIPT_ID
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      s.async = true
      s.defer = true
      document.head.appendChild(s)
    }
    let tries = 0
    const poll = setInterval(() => {
      if (window.turnstile && capRef.current && widget.current === null) {
        widget.current = window.turnstile.render(capRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: 'light',
          appearance: 'interaction-only',
          callback: (t: string) => setToken(t),
          'expired-callback': () => setToken(''),
          'error-callback': () => setToken(''),
        })
        setCaptchaUp(true)
        clearInterval(poll)
      }
      if (++tries > 120) clearInterval(poll)
    }, 100)
    return () => clearInterval(poll)
  }, [])

  /* The Cal embed takes several seconds and self-sizes when it lands, so its
     height is the only cross-origin signal we get. Until then the page shows a
     placeholder instead of a void; if it never arrives, offer a direct link. */
  useEffect(() => {
    if (!sent) return
    let landed = false
    const tick = window.setInterval(() => {
      const frame = document.querySelector<HTMLIFrameElement>('.git-cal iframe')
      if (frame && frame.getBoundingClientRect().height > 420) {
        landed = true
        setCalState('ready')
        window.clearInterval(tick)
      }
    }, 250)
    const giveUp = window.setTimeout(() => {
      window.clearInterval(tick)
      if (!landed) setCalState('failed')
    }, 25000)
    return () => {
      window.clearInterval(tick)
      window.clearTimeout(giveUp)
    }
  }, [sent])

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF(prev => ({ ...prev, [k]: e.target.value }))

  const errors = {
    email: !f.email.trim()
      ? 'Enter your work email.'
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)
        ? 'Enter a complete email address.'
        : '',
    name: !f.name.trim() ? 'Enter your name.' : '',
    org: !f.org.trim() ? 'Enter your organization.' : '',
    industry: !f.industry ? 'Select your industry.' : '',
    role: !f.role.trim() ? 'Enter your role or title.' : '',
    captcha: captchaUp && !token ? 'Verification is still running. Try again in a moment.' : '',
  }
  const valid = Object.values(errors).every(v => !v)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setTried(true)
    if (!valid || busy) return
    const form = e.target as HTMLFormElement
    if (HONEYPOTS.some(h => (form.elements.namedItem(h) as HTMLInputElement)?.value)) return

    setBusy(true)
    try {
      const payload = { ...f, turnstileToken: token }
      if (FORM_ENDPOINT) {
        try {
          await fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(payload),
          })
        } catch (err) {
          console.error('[get-in-touch] submit failed, continuing to calendar:', err)
        }
      } else {
        console.info('[get-in-touch] no endpoint set — payload:', payload)
      }
      setSent(true)
      window.scrollTo(0, 0)
    } finally {
      setBusy(false)
    }
  }

  const err = (k: keyof typeof errors) => (tried && errors[k] ? <p className="git-err">{errors[k]}</p> : null)

  return (
    <>
      <style>{`
        .git {
          --ps: 'Product Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 100dvh;
          overflow: hidden;
          background: var(--bg-primary);
        }
        .git.is-sent { grid-template-columns: 1fr; height: auto; min-height: 100dvh; overflow: visible; }
        /* The hue column is gone here, so carry its wash onto the page itself;
           without it the success state is bare background with text in a corner. */
        .git.is-sent {
          background:
            radial-gradient(44% 32% at 88% 0%, rgba(246, 186, 208, 0.30), transparent 68%),
            radial-gradient(38% 28% at 6% 8%, rgba(196, 176, 240, 0.22), transparent 72%),
            radial-gradient(36% 30% at 58% 0%, rgba(250, 206, 170, 0.20), transparent 70%),
            var(--bg-primary);
          background-repeat: no-repeat;
        }
        .git.is-sent .git-hue { display: none; }
        .git.is-sent .git-body { justify-content: flex-start; padding-top: clamp(34px, 8vh, 96px); }

        /* ── left: form column ── */
        .git-col {
          display: flex;
          flex-direction: column;
          padding: 30px clamp(24px, 4vw, 60px) 24px;
          min-width: 0;
          min-height: 0;
          overflow-y: auto;
        }
        .git-mark {
          display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none; color: var(--text-primary); align-self: flex-start;
        }
        .git-mark img { width: 26px; height: 26px; }
        .git-mark span { font-family: var(--ps); font-size: 16.5px; font-weight: 700; letter-spacing: 0.005em; }

        .git-body { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 22px 0; min-height: 0; }
        .git-form { width: 100%; max-width: 452px; }
        .git-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        .git-field { margin-bottom: 14px; }
        .git-field label {
          display: block; font-family: var(--ps); font-size: 12.5px;
          font-weight: 600; color: var(--text-primary); margin-bottom: 6px;
        }
        .git-field .req { color: #b5442e; margin-left: 2px; }
        .git-field .opt { font-weight: 450; color: var(--text-muted); font-size: 11px; margin-left: 6px; }
        .git-field input, .git-field select, .git-field textarea {
          width: 100%; font-family: var(--ps); font-size: 14px;
          color: var(--text-primary); background: transparent;
          border: 1px solid #DCD8CF; border-radius: 10px;
          padding: 0 13px; height: 42px;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          -webkit-appearance: none; appearance: none;
        }
        .git-field textarea { height: auto; min-height: 68px; padding: 11px 13px; line-height: 1.45; resize: none; }
        .git-field select {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'><path d='M1 1.5L6 6.5L11 1.5' stroke='%236b6b6b' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>");
          background-repeat: no-repeat; background-position: right 13px center;
          padding-right: 36px; cursor: pointer;
        }
        .git-field optgroup { font-family: var(--ps); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); }
        .git-field optgroup option { font-size: 14px; font-weight: 400; letter-spacing: 0; text-transform: none; color: var(--text-primary); }
        .git-field input::placeholder, .git-field textarea::placeholder { color: #A9A498; }
        .git-field input:hover, .git-field select:hover, .git-field textarea:hover { border-color: #C4BEB2; }
        .git-field input:focus, .git-field select:focus, .git-field textarea:focus {
          outline: none; border-color: var(--text-primary);
          box-shadow: 0 0 0 3px rgba(26, 25, 19, 0.06);
        }
        .git-note { font-family: var(--ps); font-size: 11px; line-height: 1.45; color: var(--text-muted); margin: 6px 0 0; }
        .git-err { font-family: var(--ps); font-size: 12px; font-weight: 500; color: #b5442e; margin: 6px 0 0; }

        .git-cap { margin: 0; }
        .git-cap:has(iframe) { margin: 12px 0 14px; }
        .git-submit {
          width: 100%; height: 46px;
          background: var(--text-primary); color: var(--white);
          border: none; border-radius: 999px;
          font-family: var(--ps); font-size: 14.5px; font-weight: 500;
          letter-spacing: 0.01em; cursor: pointer; transition: opacity 0.2s ease;
        }
        .git-submit:hover { opacity: 0.86; }
        .git-submit:disabled { opacity: 0.5; cursor: default; }
        .git-fine { font-family: var(--ps); font-size: 11px; line-height: 1.45; color: var(--text-muted); margin: 11px 0 0; }
        .git-fine a { color: var(--text-secondary); }

        .git-foot {
          display: flex; flex-direction: row; flex-wrap: wrap; gap: 6px 18px;
          justify-content: space-between; align-items: baseline;
          font-family: var(--ps); font-size: 12px; color: var(--text-muted);
        }
        .git-foot a { color: var(--text-secondary); text-decoration: none; }
        .git-foot a:hover { color: var(--text-primary); }

        /* ── right: the hue ── */
        .git-hue {
          position: relative;
          display: flex; align-items: center;
          overflow: hidden;
          background:
            radial-gradient(58% 52% at 74% 18%, rgba(246, 186, 208, 0.62), transparent 68%),
            radial-gradient(52% 48% at 22% 34%, rgba(196, 176, 240, 0.50), transparent 70%),
            radial-gradient(64% 56% at 58% 88%, rgba(250, 206, 170, 0.52), transparent 72%),
            radial-gradient(42% 40% at 88% 66%, rgba(180, 200, 244, 0.40), transparent 72%),
            #FBF4F2;
        }
        .git-hue::after {
          content: '';
          position: absolute; inset: 0; pointer-events: none; opacity: 0.5;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.035 0'/></filter><rect width='220' height='220' filter='url(%23n)'/></svg>");
        }
        .git-hue-copy { position: relative; z-index: 1; padding: clamp(32px, 4.5vw, 72px); max-width: 620px; }
        .git-hue-copy h1 {
          font-family: var(--ps);
          font-size: clamp(2rem, 3.1vw, 3.05rem);
          font-weight: 400; line-height: 1.07; letter-spacing: -0.028em;
          color: var(--text-primary); margin: 0 0 20px;
        }
        .git-hue-copy p {
          font-family: var(--ps); font-size: clamp(15px, 1.15vw, 16.5px);
          line-height: 1.62; color: #4a463d; margin: 0; max-width: 42ch;
        }

        /* ── success ── */
        .git-sent-wrap { width: 100%; max-width: 940px; margin: 0 auto; text-align: center; }
        .git-sent-h {
          font-family: var(--ps); font-size: clamp(1.7rem, 2.4vw, 2.2rem);
          font-weight: 400; letter-spacing: -0.022em; color: var(--text-primary); margin: 0 0 10px;
        }
        .git-sent-p { font-family: var(--ps); font-size: 15px; line-height: 1.6; color: var(--text-secondary); margin: 0 auto 26px; max-width: 56ch; }
        /* Cal renders its stacked layout inside the inline embed at every width
           we support (~1255-1330px tall) and self-sizes once loaded, so the
           booking flow never scrolls inside its own iframe. Reserve a modest
           block until then rather than letting the page collapse. */
        .git-cal { position: relative; border-top: 1px solid var(--border-subtle); padding-top: 18px; min-height: 520px; }
        .git-cal.is-ready { min-height: 0; }
        .git-cal-wait {
          position: absolute; inset: 18px 0 0; z-index: 2;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 14px;
          background: var(--bg-primary);
          pointer-events: none;
        }
        /* display, not opacity: the embed must never depend on a transition
           running in order to become visible. */
        .git-cal.is-ready .git-cal-wait, .git-cal.is-failed .git-cal-wait { display: none; }
        .git-cal-waitLabel {
          font-family: var(--ps); font-size: 12px; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--text-muted);
        }
        .git-cal-waitBar { position: relative; width: 168px; height: 1px; background: var(--border-subtle); overflow: hidden; }
        .git-cal-waitBar::after {
          content: ''; position: absolute; inset: 0; width: 38%;
          background: var(--text-secondary); animation: gitSweep 1.6s ease-in-out infinite;
        }
        @keyframes gitSweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(270%); } }

        .git-cal-fallback {
          position: absolute; inset: 18px 0 auto; text-align: center;
          font-family: var(--ps); font-size: 14px; color: var(--text-secondary); margin: 0; padding-top: 40px;
        }
        .git-cal-fallback a { color: var(--text-primary); }

        @media (prefers-reduced-motion: reduce) {
          .git-cal-waitBar::after { animation: none; width: 100%; opacity: 0.4; }
        }

        @media (max-width: 900px) {
          .git { grid-template-columns: 1fr; grid-template-rows: 1fr auto; }
          .git-hue { align-items: center; min-height: 150px; max-height: 30dvh; }
          .git-hue-copy { padding: 24px 20px; max-width: none; }
          .git-hue-copy h1 { font-size: clamp(1.5rem, 6.4vw, 1.95rem); margin-bottom: 8px; }
          .git-hue-copy p {
            font-size: 13.5px; line-height: 1.45; max-width: none;
            display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
          }
          /* start from the top so nothing can overlap the mark or the footer */
          .git-col { padding: 16px 20px 16px; }
          .git-body { padding: 14px 0 10px; justify-content: flex-start; }
          .git-row { grid-template-columns: 1fr 1fr; gap: 10px; }
          .git-field { margin-bottom: 12px; }
          .git-field textarea { min-height: 58px; }
          .git-note { margin-top: 5px; }
          .git-cap:has(iframe) { margin: 10px 0 12px; }
          .git-fine { margin-top: 9px; }
        }
      `}</style>

      <div className={`git${sent ? ' is-sent' : ''}`}>
        <div className="git-col">
          <Link to="/" className="git-mark">
            <img src="/assets/images/Varosync logo.svg" alt="Varosync" />
            <span>Varosync</span>
          </Link>

          <div className="git-body">
            {!sent ? (
              <form className="git-form" onSubmit={submit} noValidate>
                <div className="git-field">
                  <label htmlFor="git-email">Work email<span className="req">*</span></label>
                  <input id="git-email" name="workEmail" type="email" autoComplete="email"
                    placeholder="name@firm.com" value={f.email} onChange={set('email')} />
                  {err('email')}
                </div>

                <div className="git-row">
                  <div className="git-field">
                    <label htmlFor="git-name">Name<span className="req">*</span></label>
                    <input id="git-name" name="fullName" type="text" autoComplete="name"
                      placeholder="Jane Okafor" value={f.name} onChange={set('name')} />
                    {err('name')}
                  </div>
                  <div className="git-field">
                    <label htmlFor="git-org">Organization<span className="req">*</span></label>
                    <input id="git-org" name="organization" type="text" autoComplete="organization"
                      placeholder="Firm or company" value={f.org} onChange={set('org')} />
                    {err('org')}
                  </div>
                </div>

                <div className="git-row">
                  <div className="git-field">
                    <label htmlFor="git-industry">Industry<span className="req">*</span></label>
                    <select id="git-industry" name="industry" value={f.industry} onChange={set('industry')}>
                      <option value="" disabled>Please select</option>
                      {INDUSTRIES.map(([group, items]) => (
                        <optgroup key={group} label={group}>
                          {items.map(i => <option key={i} value={i}>{i}</option>)}
                        </optgroup>
                      ))}
                    </select>
                    {err('industry')}
                  </div>
                  <div className="git-field">
                    <label htmlFor="git-role">Role or title<span className="req">*</span></label>
                    <input id="git-role" name="role" type="text" autoComplete="organization-title"
                      placeholder="Portfolio manager" value={f.role} onChange={set('role')} />
                    {err('role')}
                  </div>
                </div>

                <div className="git-field">
                  <label htmlFor="git-decision">What decision are you working on?<span className="opt">Optional</span></label>
                  <textarea id="git-decision" name="decision" value={f.decision} onChange={set('decision')}
                    placeholder="Example: whether this company stays in our diligence process." maxLength={500} />
                  <p className="git-note">A short, public description is enough.</p>
                </div>

                <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
                  {HONEYPOTS.map(h => (
                    <input key={h} name={h} tabIndex={-1} autoComplete="off" data-1p-ignore data-lpignore="true" />
                  ))}
                </div>

                <div className="git-cap">
                  <div ref={capRef} />
                  {err('captcha')}
                </div>

                <button type="submit" className="git-submit" disabled={busy}>
                  {busy ? 'Submitting…' : 'Submit'}
                </button>
                <p className="git-fine">
                  By sending this you agree to our <a href="/legal/website-terms/">Website Terms</a>{' '}
                  and <a href="/legal/privacy/">Privacy Notice</a>.
                </p>
              </form>
            ) : (
              <div className="git-sent-wrap">
                <h2 className="git-sent-h">Thank you for reaching out.</h2>
                <p className="git-sent-p">
                  Choose a time below.
                </p>
                <div className={`git-cal is-${calState}`}>
                  <div className="git-cal-wait" aria-hidden={calState !== 'loading'}>
                    <span className="git-cal-waitLabel">Loading the calendar</span>
                    <span className="git-cal-waitBar" />
                  </div>
                  {calState === 'failed' && (
                    <p className="git-cal-fallback">
                      The calendar did not load.{' '}
                      <a href={`https://cal.com/${CAL_LINK}`} target="_blank" rel="noreferrer">
                        Open it in a new tab
                      </a>
                      .
                    </p>
                  )}
                  <Cal
                    namespace={CAL_NAMESPACE}
                    calLink={CAL_LINK}
                    style={{ width: '100%' }}
                    config={{
                      layout: 'month_view',
                      theme: 'light',
                      name: f.name,
                      email: f.email,
                      /* Their form answer rides into the booking's notes, so the
                         invite carries the question and nobody restates it live. */
                      ...(f.decision.trim() ? { notes: f.decision.trim() } : {}),
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="git-foot">
            <span>© 2026 Varosync, Inc. All rights reserved.</span>
            <Link to="/">Back to full website</Link>
          </div>
        </div>

        <div className="git-hue">
          <div className="git-hue-copy">
            <h1>Engineering scientific expertise for high-stakes decisions.</h1>
            <p>
              A research platform, and a team that shapes it around your process and stays with
              the work. Your people reach the answer faster, and with more confidence.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInTouch
