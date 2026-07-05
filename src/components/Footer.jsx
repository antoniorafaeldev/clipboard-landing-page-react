import { Logo } from "./header";
import iconFacebook from "../assets/icon-facebook.svg";
import iconInstagram from "../assets/icon-instagram.svg";
import iconTwitter from "../assets/icon-twitter.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="footer-navigation">
        <nav>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Press Kit</li>
            <li>Install Guide</li>
          </ul>
        </nav>
      </div>
      <div className="social-network">
        <img src={iconFacebook} alt="Icon of Facebook" />
        <img src={iconInstagram} alt="Icon of Instagram" />
        <img src={iconTwitter} alt="Icon of Twitter" />
      </div>
    </footer>
  );
}
