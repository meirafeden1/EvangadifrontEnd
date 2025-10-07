import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = ({ currentUser, questions }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter questions by search term
  const filteredQuestions = questions.filter(
    (q) =>
      q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.homeWrapper}>
      {/* Top row: Ask Question + Welcome */}
      <div className={styles.topRow}>
        <button
          className={styles.askButton}
          onClick={
            () =>
              currentUser
                ? navigate("/questions/post") // redirect to post question page if logged in
                : navigate("/auth/login") // redirect to login otherwise
          }
        >
          Ask Question
        </button>
        <div className={styles.welcomeText}>
          Welcome, {currentUser?.username || "Guest"}
        </div>
      </div>

      {/* Search bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Questions list */}
      <section className={styles.usersSection}>
        <h2>Recent Questions</h2>
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => (
            <div
              key={q.question_id}
              className={styles.userRow}
              onClick={() => navigate(`/questions/${q.question_id}`)}
            >
              <div className={styles.userInfo}>
                <img
                  src={q.user_avatar || "/default-avatar.png"}
                  alt={q.user_name || "Anonymous"}
                  className={styles.avatar}
                />
                <span className={styles.username}>
                  {q.user_name || "Anonymous"}
                </span>
                <span className={styles.questionPreview}>
                  {q.title.length > 50 ? q.title.slice(0, 50) + "..." : q.title}
                </span>
              </div>
              <button className={styles.detailButton}>&gt;</button>
            </div>
          ))
        ) : (
          <p>No questions found.</p>
        )}
      </section>
    </div>
  );
};

export default Home;


