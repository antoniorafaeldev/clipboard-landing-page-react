import { Logo } from "./Header";

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
        <img src="./src/assets/icon-facebook.svg" alt="Icon of Facebook" />
        <img src="./src/assets/icon-instagram.svg" alt="Icon of Instagram" />
        <img src="./src/assets/icon-twitter.svg" alt="Icon of Twitter" />
      </div>
    </footer>
  );
}
