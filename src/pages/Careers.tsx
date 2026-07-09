import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROLES, APPLY_EMAIL } from "../data/roles";

const PRINCIPLES = [
  {
    num: "01",
    title: "Follow the evidence.",
    body: "Every program begins as a hypothesis and earns its place through data. When results point somewhere new, we update quickly and follow them.",
  },
  {
    num: "02",
    title: "Own the problem.",
    body: "Individuals and teams take real responsibility for questions that matter. People here have the agency to find an approach that works, and good ideas carry weight from anywhere in the organization.",
  },
  {
    num: "03",
    title: "Work with intensity.",
    body: "We are here to make progress on problems that have absorbed entire careers. That kind of work takes focus, stamina, and a deep sense of responsibility. We bring all three.",
  },
  {
    num: "04",
    title: "Push the frontier.",
    body: "We work at the edge of what computation and experiment can achieve together. The measure of the research is whether it moves science forward, and we intend for the work done here to last.",
  },
];

export default function Careers() {
  useEffect(() => {
    document.title = "Varosync - Careers";
  }, []);

  return (
    <>
      <style>{`
        @keyframes cfade {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .c-fade {
          animation: cfade 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .careers-page {
          min-height: 100vh;
          background: #F6F8E7;
        }
        .careers-hero-wrap {
          position: relative;
        }
        .careers-hero {
          max-width: 72rem;
          margin: 0 auto;
          padding: 180px 24px 0;
        }
        .careers-hero-blob {
          position: absolute;
          top: 0;
          right: 0;
          width: clamp(280px, 34vw, 660px);
          pointer-events: none;
        }
        .careers-hero-blob img {
          width: 100%;
          max-width: none;
          height: auto;
          display: block;
          transform: scaleX(-1);
          filter: drop-shadow(0 28px 56px rgba(75, 105, 40, 0.18));
        }
        .careers-hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 300;
          line-height: 1.06;
          letter-spacing: -0.025em;
          color: var(--text-primary, #15110b);
          max-width: 720px;
          margin-bottom: 28px;
        }
        .careers-hero-body {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.2vw, 1.1rem);
          line-height: 1.7;
          color: var(--text-secondary, #6b6b6b);
          max-width: 560px;
        }
        .careers-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--text-primary, #15110b);
          color: var(--white, #fff);
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          padding: 13px 30px;
          border-radius: 999px;
          text-decoration: none;
          margin-top: 40px;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .careers-hero-cta:hover {
          background: #000;
          transform: translateY(-1px);
        }
        .careers-hero-cta svg {
          transition: transform 0.2s ease;
        }
        .careers-hero-cta:hover svg {
          transform: translateY(2px);
        }

        /* ── Operating principles ── */
        .careers-how {
          max-width: 72rem;
          margin: 0 auto;
          padding: 130px 24px 0;
          display: grid;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
          column-gap: clamp(48px, 7vw, 120px);
          align-items: start;
        }
        .careers-how-rail {
          position: sticky;
          top: 130px;
        }
        .careers-how-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.7rem, 2.6vw, 2.2rem);
          font-weight: 300;
          letter-spacing: -0.018em;
          color: var(--text-primary, #15110b);
          margin-bottom: 14px;
        }
        .careers-how-lede {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary, #6b6b6b);
          max-width: 260px;
        }
        .careers-how-item {
          position: relative;
          padding-left: clamp(60px, 6vw, 88px);
          margin-bottom: clamp(64px, 9vh, 96px);
        }
        .careers-how-item:last-child { margin-bottom: 0; }
        .careers-how-num {
          position: absolute;
          left: 0;
          top: -4px;
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 3.6vw, 3.2rem);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.02em;
          color: rgba(21, 17, 11, 0.16);
        }
        .careers-how-title {
          font-family: var(--font-heading);
          font-size: clamp(1.6rem, 2.5vw, 2.05rem);
          font-weight: 300;
          line-height: 1.12;
          letter-spacing: -0.018em;
          color: var(--text-primary, #15110b);
          margin-bottom: 14px;
        }
        .careers-how-text {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary, #6b6b6b);
          max-width: 440px;
        }
        @media (min-width: 901px) {
          .careers-how-item:nth-child(2) { margin-left: 40px; }
          .careers-how-item:nth-child(3) { margin-left: 80px; }
          .careers-how-item:nth-child(4) { margin-left: 120px; }
        }

        /* ── Role listing ── */
        .careers-roles {
          max-width: 72rem;
          margin: 0 auto;
          padding: 100px 24px 0;
          scroll-margin-top: 40px;
        }
        .careers-roles-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 2.4vw, 1.9rem);
          font-weight: 300;
          letter-spacing: -0.015em;
          color: var(--text-primary, #15110b);
          margin-bottom: 8px;
        }
        .careers-role-count {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-secondary, #6b6b6b);
          margin-bottom: 28px;
        }
        .careers-role-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
          border-top: 1px solid rgba(0,0,0,0.08);
          text-decoration: none;
          gap: 16px;
          transition: opacity 0.2s ease;
        }
        .careers-role-link:last-of-type {
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .careers-role-link:hover {
          opacity: 0.65;
        }
        .careers-role-title {
          font-family: var(--font-heading);
          font-size: clamp(1.1rem, 1.8vw, 1.35rem);
          font-weight: 300;
          letter-spacing: -0.01em;
          color: var(--text-primary, #15110b);
          margin-bottom: 3px;
        }
        .careers-role-dept {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-secondary, #6b6b6b);
        }
        .careers-role-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }
        .careers-role-location {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-secondary, #6b6b6b);
          white-space: nowrap;
        }
        .careers-role-type {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: var(--text-secondary, #6b6b6b);
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(0,0,0,0.045);
          white-space: nowrap;
        }
        .careers-role-arrow {
          flex-shrink: 0;
          color: var(--text-secondary, #6b6b6b);
          transition: transform 0.2s ease;
        }
        .careers-role-link:hover .careers-role-arrow {
          transform: translateX(3px);
        }

        /* ── Bottom CTA ── */
        .careers-bottom {
          position: relative;
          display: flex;
          align-items: flex-end;
          gap: clamp(24px, 5vw, 80px);
          padding: 60px 0 96px;
        }
        .careers-bottom-blob {
          flex: 0 0 auto;
          width: clamp(220px, 24vw, 380px);
          pointer-events: none;
        }
        .careers-bottom-blob img {
          width: 100%;
          max-width: none;
          height: auto;
          display: block;
          transform: scaleX(-1);
          filter: drop-shadow(0 28px 56px rgba(75, 105, 40, 0.18));
        }
        .careers-bottom-inner {
          border-top: 1px solid rgba(0,0,0,0.08);
          padding-top: 48px;
          padding-bottom: 0;
          max-width: 480px;
          align-self: flex-end;
          margin-left: auto;
          margin-right: max(24px, calc((100vw - 72rem) / 2 + 24px));
        }
        .careers-bottom-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 2.2vw, 1.7rem);
          font-weight: 300;
          letter-spacing: -0.015em;
          color: var(--text-primary, #15110b);
          margin-bottom: 12px;
        }
        .careers-bottom-text {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.65;
          color: var(--text-secondary, #6b6b6b);
          margin-bottom: 24px;
        }
        .careers-bottom-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary, #15110b);
          text-decoration: none;
          border-bottom: 1px solid var(--text-primary, #15110b);
          padding-bottom: 2px;
          transition: opacity 0.2s ease;
        }
        .careers-bottom-link:hover { opacity: 0.6; }

        @media (max-width: 1020px) {
          .careers-hero-wrap {
            display: flex;
            flex-direction: column;
            padding-top: 0;
          }
          .careers-hero {
            padding-top: 28px;
          }
          .careers-hero-blob {
            position: static;
            order: -1;
            margin: 0 0 8px auto;
            width: clamp(260px, 56vw, 440px);
          }
        }
        @media (max-width: 900px) {
          .careers-how {
            grid-template-columns: 1fr;
            row-gap: 48px;
          }
          .careers-how-rail {
            position: static;
          }
          .careers-bottom {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding-top: 40px;
          }
          .careers-bottom-inner {
            order: 1;
            align-self: auto;
            margin: 0 24px;
            padding-bottom: 0;
          }
          .careers-bottom-blob {
            order: 2;
            margin-top: 48px;
            width: clamp(200px, 48vw, 320px);
          }
        }
        @media (max-width: 640px) {
          .careers-hero-wrap { padding-top: 0; }
          .careers-hero { padding-top: 24px; }
          .careers-how { padding-top: 72px; }
          .careers-how-item { padding-left: 52px; margin-bottom: 52px; }
          .careers-how-num { font-size: 2rem; }
          .careers-roles { padding-top: 72px; }
          .careers-role-meta { display: none; }
          .careers-role-dept-mobile { display: inline; }
        }
        @media (min-width: 641px) {
          .careers-role-dept-mobile { display: none; }
        }
      `}</style>

      <div className="careers-page">
        {/* ── Hero ── */}
        <div className="careers-hero-wrap">
          <section className="careers-hero">
            <h1
              className="careers-hero-headline c-fade"
              style={{ animationDelay: "0.05s" }}
            >
              Redefine what science can achieve.
            </h1>
            <p
              className="careers-hero-body c-fade"
              style={{ animationDelay: "0.15s" }}
            >
              Advances in medicine begin as advances in understanding.
              Varosync's mission is to push the boundaries of science and
              solve fundamental problems in biology and human health. Our
              team spans computation and experimental science, committed
              scientists and engineers working together to build that
              future.
            </p>
            <div className="c-fade" style={{ animationDelay: "0.22s" }}>
              <a
                href="#open-positions"
                className="careers-hero-cta"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("open-positions")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View open positions
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 4.5V15M10 15L5.5 10.5M10 15L14.5 10.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </section>
          <div
            className="careers-hero-blob c-fade"
            style={{ animationDelay: "0.2s" }}
          >
            <img src="/assets/images/blob-recovery/company2.png" alt="" />
          </div>
        </div>

        {/* ── Operating principles ── */}
        <section className="careers-how">
          <div
            className="careers-how-rail c-fade"
            style={{ animationDelay: "0.25s" }}
          >
            <h2 className="careers-how-heading">Operating principles</h2>
            <p className="careers-how-lede">What we hold ourselves to.</p>
          </div>
          <div className="careers-how-list">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.num}
                className="careers-how-item c-fade"
                style={{ animationDelay: `${0.3 + i * 0.07}s` }}
              >
                <span className="careers-how-num">{p.num}</span>
                <h3 className="careers-how-title">{p.title}</h3>
                <p className="careers-how-text">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Open Roles ── */}
        <section className="careers-roles" id="open-positions">
          <h2
            className="careers-roles-heading c-fade"
            style={{ animationDelay: "0.35s" }}
          >
            Open positions
          </h2>
          <p
            className="careers-role-count c-fade"
            style={{ animationDelay: "0.38s" }}
          >
            {ROLES.length} open role{ROLES.length !== 1 ? "s" : ""}
          </p>

          <div>
            {ROLES.map((role, i) => (
              <Link
                key={role.slug}
                to={`/careers/${role.slug}`}
                className="careers-role-link c-fade"
                style={{ animationDelay: `${0.4 + i * 0.05}s` }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="careers-role-title">{role.title}</div>
                  <div className="careers-role-dept">
                    {role.department}
                    <span className="careers-role-dept-mobile">
                      {" · "}
                      {role.location}
                    </span>
                  </div>
                </div>

                <div className="careers-role-meta">
                  <span className="careers-role-location">{role.location}</span>
                  <span className="careers-role-type">{role.type}</span>
                </div>

                <svg
                  className="careers-role-arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.5 4.5L12 9L6.5 13.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="careers-bottom">
          <div
            className="careers-bottom-blob c-fade"
            style={{ animationDelay: "0.55s" }}
          >
            <img src="/assets/images/blob-recovery/company1.png" alt="" />
          </div>
          <div
            className="careers-bottom-inner c-fade"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="careers-bottom-heading">
              Don't see the right fit?
            </p>
            <p className="careers-bottom-text">
              We are always interested in hearing from people whose work aligns
              with ours. Send a note with your background and what you would
              want to work on.
            </p>
            <a
              className="careers-bottom-link"
              href={`mailto:${APPLY_EMAIL}?subject=General%20Inquiry%20%E2%80%93%20Careers`}
            >
              {APPLY_EMAIL}
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
