import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Question from "../Question/Question";

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
          onClick={() =>
            currentUser ? navigate("/question/post") : navigate("/auth/login")
          }
        >
          Ask Question
        </button>
        <div className={styles.welcomeText}>
         <h3> Welcome : {currentUser?.username || "Guest"}</h3>
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
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => (
            <Question key={q.question_id || q.id} question={q} />
          ))
        ) : (
          <p>No questions found.</p>
        )}
      </section>
    </div>
  );
};

export default Home;
