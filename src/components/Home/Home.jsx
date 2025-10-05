import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.homeContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.title}>Welcome to Evangadi Q&A Forum</h1>
        <p className={styles.subtitle}>
          A place where students ask questions, share knowledge, and grow
          together.
        </p>
        <button
          className={styles.askButton}
          onClick={() => navigate("/questions")}
        >
          Ask a Question
        </button>
      </div>

      {/* Features Section */}
      <div className={styles.featuresSection}>
        <div className={styles.featureCard}>
          <h3> Ask Anything</h3>
          <p>Post your doubts, assignments, or coding questions freely.</p>
        </div>

        <div className={styles.featureCard}>
          <h3> Help Others</h3>
          <p>
            Answer questions from fellow students and earn respect in the
            community.
          </p>
        </div>

        <div className={styles.featureCard}>
          <h3> Stay Connected</h3>
          <p>Join discussions, share tips, and build valuable friendships.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
