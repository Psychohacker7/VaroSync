import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ROLES, APPLY_EMAIL } from "../data/roles";

function SectionLabel({ children }: { children: string }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: 20,
        fontWeight: 400,
        letterSpacing: "-0.01em",
        color: "var(--text-primary, #15110b)",
        marginBottom: 16,
      }}
    >
      {children}
    </h2>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            lineHeight: 1.7,
            color: "var(--text-primary, #15110b)",
            paddingLeft: 18,
            position: "relative",
            marginBottom: 10,
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              top: 11,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "var(--text-muted, #bbb)",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ApplyButton({ role }: { role: { title: string; department: string } }) {
  const subject = encodeURIComponent(`${role.title}, ${role.department}`);
  return (
    <a
      href={`mailto:${APPLY_EMAIL}?subject=${subject}`}
      className="cd-apply-btn"
    >
      Apply for this role
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
        <path
          d="M6 14L14 6M14 6H7M14 6V13"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function CareerDetail() {
  const { slug } = useParams<{ slug: string }>();
  const role = ROLES.find((r) => r.slug === slug);

  useEffect(() => {
    if (role) document.title = `Varosync - ${role.title}`;
  }, [role]);

  if (!role) return <Navigate to="/careers" replace />;

  return (
    <>
      <style>{`
        @keyframes cdfade {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cd-fade {
          animation: cdfade 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .cd-page {
          min-height: 100vh;
          background: #F6F8E7;
        }

        /* ── Header ── */
        .cd-header {
          max-width: 72rem;
          margin: 0 auto;
          padding: 140px 24px 0;
        }
        .cd-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary, #6b6b6b);
          text-decoration: none;
          margin-bottom: 48px;
          transition: color 0.2s ease;
        }
        .cd-back:hover { color: var(--text-primary, #15110b); }
        .cd-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 300;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: var(--text-primary, #15110b);
          margin-bottom: 16px;
          max-width: 640px;
        }
        .cd-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .cd-meta-text {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-secondary, #6b6b6b);
        }
        .cd-meta-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--text-muted, #bbb);
          flex-shrink: 0;
        }
        .cd-meta-tag {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: var(--text-secondary, #6b6b6b);
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(0,0,0,0.045);
        }

        /* ── Apply CTA ── */
        .cd-apply-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          background: var(--text-primary, #15110b);
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: opacity 0.2s ease;
        }
        .cd-apply-btn:hover { opacity: 0.8; }

        /* ── Body ── */
        .cd-body {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 24px;
        }
        .cd-content {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 80px;
          padding-top: 64px;
          border-top: 1px solid rgba(0,0,0,0.08);
          margin-top: 48px;
        }
        .cd-main { min-width: 0; }
        .cd-section { margin-bottom: 48px; }
        .cd-prose {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-primary, #15110b);
          margin-bottom: 12px;
        }
        .cd-prose:last-child { margin-bottom: 0; }

        /* ── Sidebar ── */
        .cd-sidebar {
          padding-top: 4px;
        }
        .cd-sidebar-group {
          margin-bottom: 32px;
        }
        .cd-sidebar-label {
          font-family: var(--font-body);
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--text-secondary, #6b6b6b);
          margin-bottom: 6px;
        }
        .cd-sidebar-value {
          font-family: var(--font-body);
          font-size: 14.5px;
          color: var(--text-primary, #15110b);
          line-height: 1.5;
        }

        /* ── Bottom apply ── */
        .cd-bottom-apply {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 24px 48px;
        }
        .cd-bottom-apply-inner {
          border-top: 1px solid rgba(0,0,0,0.08);
          padding-top: 48px;
          padding-bottom: 40px;
        }
        .cd-apply-note {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.65;
          color: var(--text-secondary, #6b6b6b);
          margin-bottom: 20px;
          max-width: 520px;
        }
        .cd-apply-alt {
          font-family: var(--font-body);
          font-size: 13.5px;
          color: var(--text-secondary, #6b6b6b);
          margin-top: 18px;
        }
        .cd-apply-alt a {
          color: var(--text-primary, #15110b);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(0,0,0,0.3);
          transition: text-decoration-color 0.2s ease;
        }
        .cd-apply-alt a:hover {
          text-decoration-color: var(--text-primary, #15110b);
        }

        /* ── About Varosync boilerplate ── */
        .cd-about-co {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 24px 140px;
        }
        .cd-about-co-inner {
          border-top: 1px solid rgba(0,0,0,0.08);
          padding-top: 48px;
          max-width: 520px;
        }
        .cd-about-co-text {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-secondary, #6b6b6b);
        }

        @media (max-width: 860px) {
          .cd-content {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .cd-sidebar {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 20px;
            border-top: 1px solid rgba(0,0,0,0.08);
            padding-top: 32px;
          }
          .cd-sidebar-group { margin-bottom: 0; }
        }
        @media (max-width: 640px) {
          .cd-header { padding-top: 110px; }
        }
      `}</style>

      <div className="cd-page">
        {/* ── Header ── */}
        <header className="cd-header">
          <Link to="/careers" className="cd-back cd-fade" style={{ animationDelay: "0.02s" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8L10 13"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All positions
          </Link>

          <h1 className="cd-title cd-fade" style={{ animationDelay: "0.08s" }}>
            {role.title}
          </h1>

          <div className="cd-meta cd-fade" style={{ animationDelay: "0.14s" }}>
            <span className="cd-meta-text">{role.department}</span>
            <span className="cd-meta-dot" />
            <span className="cd-meta-text">{role.location}</span>
            <span className="cd-meta-dot" />
            <span className="cd-meta-tag">{role.type}</span>
          </div>

          <div className="cd-fade" style={{ animationDelay: "0.2s" }}>
            <ApplyButton role={role} />
          </div>
        </header>

        {/* ── Body: main + sidebar ── */}
        <div className="cd-body">
          <div
            className="cd-content cd-fade"
            style={{ animationDelay: "0.28s" }}
          >
            <div className="cd-main">
              <div className="cd-section">
                <SectionLabel>About the role</SectionLabel>
                {role.about.map((p, i) => (
                  <p key={i} className="cd-prose">{p}</p>
                ))}
              </div>

              <div className="cd-section">
                <SectionLabel>What you'll do</SectionLabel>
                <Bullets items={role.responsibilities} />
              </div>

              <div className="cd-section">
                <SectionLabel>You may be a good fit if you</SectionLabel>
                <Bullets items={role.qualifications} />
              </div>

              <div className="cd-section">
                <SectionLabel>Strong candidates may also have</SectionLabel>
                <Bullets items={role.preferred} />
              </div>
            </div>

            <aside className="cd-sidebar">
              <div className="cd-sidebar-group">
                <p className="cd-sidebar-label">Department</p>
                <p className="cd-sidebar-value">{role.department}</p>
              </div>
              <div className="cd-sidebar-group">
                <p className="cd-sidebar-label">Location</p>
                <p className="cd-sidebar-value">{role.location}</p>
              </div>
              <div className="cd-sidebar-group">
                <p className="cd-sidebar-label">Type</p>
                <p className="cd-sidebar-value">{role.type}</p>
              </div>
            </aside>
          </div>
        </div>

        {/* ── Bottom apply ── */}
        <section className="cd-bottom-apply">
          <div className="cd-bottom-apply-inner cd-fade" style={{ animationDelay: "0.35s" }}>
            <SectionLabel>How to apply</SectionLabel>
            <p className="cd-apply-note">{role.applyNote}</p>
            <ApplyButton role={role} />
            <p className="cd-apply-alt">
              Applications go to{" "}
              <a href={`mailto:${APPLY_EMAIL}`}>{APPLY_EMAIL}</a>.
            </p>
          </div>
        </section>

        {/* ── About Varosync ── */}
        <section className="cd-about-co">
          <div className="cd-about-co-inner cd-fade" style={{ animationDelay: "0.4s" }}>
            <SectionLabel>About Varosync</SectionLabel>
            <p className="cd-about-co-text">
              Advances in medicine begin as advances in understanding.
              Varosync's mission is to push the boundaries of science and
              solve fundamental problems in biology and human health. Our
              team spans computation and experimental science, committed
              scientists and engineers working together to build that
              future.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
