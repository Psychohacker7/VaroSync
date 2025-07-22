const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';
const columnTitleStyle = { fontWeight: 800, marginBottom: 8, color: '#fff', fontSize: 16, letterSpacing: 0.5, fontFamily };
const linkStyle = { color: '#fff', textDecoration: 'none', fontWeight: 400, fontSize: 15, opacity: 0.92, fontFamily };

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content" style={{alignItems: 'flex-start', position: 'relative'}}>
        {/* Logo and company name */}
        <div style={{display: 'flex', alignItems: 'center', gap: 6, minWidth: 180}}>
          <img src="/assets/images/logo_white.svg" alt="Varosync Logo" style={{width: 48, height: 48, display: 'block'}} />
          <span style={{fontWeight: 500, fontSize: 22, color: '#fff', letterSpacing: 1, fontFamily}}>Varosync</span>
        </div>
        {/* Empty column for spacing */}
        <div style={{flex: 1}}></div>
        {/* COMPANY column */}
        <div style={{minWidth: 160}}>
          <div style={columnTitleStyle}>COMPANY</div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.8}}>
            <li><a href="/company" style={linkStyle}>About Us</a></li>
            <li><a href="/technology" style={linkStyle}>Technology</a></li>
            <li><a href="/news" style={linkStyle}>Blog & Press</a></li>
            <li><a href="mailto:partnerships@varosync.com" style={linkStyle}>Careers</a></li>
            <li><a href="mailto:partnerships@varosync.com" style={linkStyle}>Contact Us</a></li>
          </ul>
        </div>
        {/* DEVELOPMENT column */}
        <div style={{minWidth: 180}}>
          <div style={columnTitleStyle}>DEVELOPMENT</div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.8}}>
            <li><a href="mailto:partnerships@varosync.com" style={linkStyle}>Licensing & pipeline</a></li>
            <li><a href="mailto:partnerships@varosync.com" style={linkStyle}>Clinical trials</a></li>
          </ul>
        </div>
        {/* POLICIES & SOCIAL column */}
        <div style={{minWidth: 200}}>
          <div style={columnTitleStyle}>POLICIES & SOCIAL</div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.8}}>
            <li><a href="https://crimson-lilian-17.tiiny.site" target="_blank" rel="noopener noreferrer" style={linkStyle}>Code of Conduct</a></li>
            <li><a href="https://crimson-lilian-17.tiiny.site" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a></li>
            <li style={{display: 'flex', gap: 12, marginTop: 8}}>
              <a href="https://x.com/var0sync/" target="_blank" rel="noopener noreferrer" aria-label="X" style={{display: 'inline-flex', alignItems: 'center'}}>
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" style={{width: 24, height: 24, filter: 'invert(1)'}} />
              </a>
              <a href="https://www.linkedin.com/company/varosync/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{display: 'inline-flex', alignItems: 'center'}}>
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" style={{width: 24, height: 24, filter: 'invert(1)'}} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Divider bar, aligned with columns */}
      <div style={{maxWidth: 1200, margin: '32px auto 12px auto', padding: '0 16px'}}>
        <div style={{height: 1, background: 'rgba(255,255,255,0.2)'}} />
      </div>
      {/* Copyright */}
      <div style={{textAlign: 'center', color: '#fff', fontSize: 15, opacity: 0.8, marginBottom: 4, fontWeight: 400, fontFamily}}>
        © 2025 Varosync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 