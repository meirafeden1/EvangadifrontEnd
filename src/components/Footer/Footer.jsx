import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import footerlogo from "../../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Social + Logo Section */}
        <div className={styles.socialSection}>
          <img
            src={footerlogo}
            alt="Evangadi Forum Logo"
            className={styles.logoImg}
          />
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className={styles.linksSection}>
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link to="/about" className={styles.link}>
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/terms" className={styles.link}>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className={styles.link}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactSection}>
          <h4>Contact Info</h4>
          <p>Evangadi Networks</p>
          <p>support@evangadi.com</p>
          <p>+1-202-386-2702</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
