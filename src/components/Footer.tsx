const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/assets/images/logo_white.svg"
            alt="Varosync Logo"
            style={{ width: '32px', height: '32px', display: 'block' }}
          />
          <span style={{
            fontWeight: 500,
            fontSize: '17px',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.01em',
          }}>
            Varosync
          </span>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a
            href="https://x.com/var0sync/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            style={{ display: 'inline-flex', alignItems: 'center', opacity: 0.7, transition: 'opacity 0.2s' }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"
              alt="X"
              style={{ width: '18px', height: '18px', filter: 'invert(1)' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/varosync/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ display: 'inline-flex', alignItems: 'center', opacity: 0.7, transition: 'opacity 0.2s' }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              alt="LinkedIn"
              style={{ width: '18px', height: '18px', filter: 'invert(1)' }}
            />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: 'var(--content-max-width)', margin: '24px auto 12px auto' }}>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.12)' }} />
      </div>

      {/* Copyright + Email */}
      <div style={{
        maxWidth: 'var(--content-max-width)',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        <span style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '13px',
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
        }}>
          &copy; 2026 Varosync. All rights reserved.
        </span>
        <a
          href="mailto:partnerships@varosync.com"
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '13px',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
        >
          partnerships@varosync.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
