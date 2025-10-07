import styles from "./Question.module.css";
import { useNavigate } from "react-router-dom";

const Question = ({ question }) => {
  const navigate = useNavigate();

  const handleOpenQuestion = () => {
    navigate(`/questions/${question.question_id}`);
  };

  // Avatar fallback (optional)
  const avatarUrl =
    question?.user_avatar || "https://www.gravatar.com/avatar/?d=mp"; // fallback avatar

  // Username from API
  const username = question?.user_name || "Anonymous";

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
