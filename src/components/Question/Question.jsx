import React from "react";
import styles from "./Question.module.css";
import { useNavigate } from "react-router-dom";

const Question = ({ question }) => {
  const navigate = useNavigate();

  const handleOpenQuestion = () => {
    navigate(`/questions/${question.id}`);
  };

  const avatarUrl =
    question?.user?.avatar || "https://www.gravatar.com/avatar/?d=mp"; // fallback avatar

  const username = question?.user?.name || "Anonymous";

  return (
    <div
      className={styles.questionCard}
      onClick={handleOpenQuestion}
      title="View question details"
    >
      <div className={styles.userInfo}>
        <img src={avatarUrl} alt={username} className={styles.avatar} />
        <span className={styles.username}>{username}</span>
      </div>

      <div className={styles.questionContent}>
        <p className={styles.questionText}>{question.title}</p>
        <button
          className={styles.viewButton}
          onClick={(e) => {
            e.stopPropagation();
            handleOpenQuestion();
          }}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Question;
