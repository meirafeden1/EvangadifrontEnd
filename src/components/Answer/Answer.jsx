import React, { useState } from "react";
import styles from "./Answer.module.css";

const Answer = ({ question, answers, onPostAnswer, currentUser }) => {
  const [newAnswer, setNewAnswer] = useState("");

  const handleSubmit = () => {
    if (!newAnswer.trim()) return;
    onPostAnswer(newAnswer);
    setNewAnswer("");
  };

  return (
    <div className={styles.answerPage}>
      {/* Question Section */}
      <div className={styles.questionSection}>
        <h2 className={styles.questionTitle}>{question.title}</h2>
        <p className={styles.questionContent}>{question.content}</p>
      </div>

      {/* Answers Section */}
      <div className={styles.answersSection}>
        <h3 className={styles.answersTitle}>Answers from the Community</h3>
        {answers.length === 0 ? (
          <p>No answers yet. Be the first to reply!</p>
        ) : (
          answers.map((ans) => (
            <div key={ans.answer_id} className={styles.answerItem}>
              <div className={styles.userInfo}>
                <img
                  src={ans.user_avatar || "/default-avatar.png"}
                  alt={ans.user_name || "Anonymous"}
                  className={styles.avatar}
                />
                <span className={styles.username}>
                  {ans.user_name || "Anonymous"}
                </span>
              </div>
              <div className={styles.answerContent}>{ans.content}</div>
            </div>
          ))
        )}
      </div>

      {/* Post Answer Section */}
      {currentUser && (
        <div className={styles.postAnswer}>
          <textarea
            className={styles.answerInput}
            placeholder="Write your answer..."
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          ></textarea>
          <button className={styles.postButton} onClick={handleSubmit}>
            Post Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default Answer;


