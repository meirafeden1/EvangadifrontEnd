import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutContainer}>
        {/* Top-left About label */}
        <div className={styles.topLeftLabel}>About</div>

        {/* Main content */}
        <h1 className={styles.mainTitle}>Evangadi Networks</h1>

        <p className={styles.description}>
          Evangadi Network is a collaborative platform where students can ask
          and answer questions, connect with peers, and enhance their learning
          experience.
        </p>

        {/* Bottom-left How it Works button */}
        <div className={styles.bottomLeft}>
          <Link to="/how-it-works" className={styles.howButton}>
            How it Works
          </Link>
        </div>

        {/* Decorative pink rectangle at bottom-left */}
        <div className={styles.pinkRectangle}></div>
      </div>
    </div>
  );
};

export default About;
