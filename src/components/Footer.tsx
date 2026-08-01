const LOCATIONS = [
  { city: "New York",         street: "712 5th Avenue",                     zip: "10019" },
  { city: "San Francisco",    street: "995 Market Street",                  zip: "94103" },
  { city: "Long Island City", street: "BioLabs · 45-18 Court Square",       zip: "11101" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top: brand + socials */}
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/assets/images/logo_white.svg"
              alt="Varosync Logo"
              className="footer-logo"
            />
            <span className="footer-brandname">Varosync</span>
          </div>

          <div className="footer-socials">
            <a
              href="https://x.com/var0sync/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="footer-social"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"
                alt="X"
                style={{ width: "18px", height: "18px", filter: "invert(1)" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/varosync/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                alt="LinkedIn"
                style={{ width: "18px", height: "18px", filter: "invert(1)" }}
              />
            </a>
          </div>
        </div>

        {/* Middle: locations */}
        <div className="footer-locations">
          {LOCATIONS.map((loc) => (
            <div key={loc.city} className="footer-loc" tabIndex={0}>
              <span className="footer-loc-city">{loc.city}</span>
              <div className="footer-loc-details">
                <span className="footer-loc-street">{loc.street}</span>
                <span className="footer-loc-zip">{loc.zip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom: copyright + email */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Varosync. All rights reserved.
          </span>
          <a
            href="mailto:partnerships@varosync.com"
            className="footer-email"
          >
            partnerships@varosync.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
