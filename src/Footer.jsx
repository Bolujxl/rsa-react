import "./Footer.css";
import Button from "./Button";
import RsaLogo from "./assets/rsa_logonew.svg";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={RsaLogo} alt="RSA Logo" />
          </div>
          <div className="footer-desc">
            <p>
              RSA is a real-time third-party risk intelligence platform that delivers a complete picture of the partners a business relies upon.
            </p>
            <p className="footer-address">
              21 Baorda Ave., London, W3AR 1AP, United Kingdom
            </p>
          </div>
          <div className="footer-btn">
             <Button buttonText="welcome@rsa.io" btnIcon="mail" />
          </div>
        </div>

        <div className="footer-right">
          <h3>↳ Navigation</h3>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">RSA Platform</a>
            <a href="#">Solutions</a>
            <a href="#">Resources</a>
            <a href="#">Login</a>
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <p>© 2025 • Board J4kobee Solutions trading as RSA • Privacy & Cookies</p>
      </div>
    </footer>
  );
}

export default Footer;
