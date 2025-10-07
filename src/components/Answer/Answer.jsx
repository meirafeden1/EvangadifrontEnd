// import React, { useState } from "react";
// import "./Answer.module.css";

// const Answer = ({ question, answers, onPostAnswer }) => {
//   const [newAnswer, setNewAnswer] = useState("");

//   const handleSubmit = () => {
//     if (!newAnswer.trim()) return;
//     onPostAnswer(newAnswer);
//     setNewAnswer("");
//   };

//   return (
//     <div className="answerPage">
//       {/* Question Section */}
//       <div className="questionSection">
//         <h2 className="questionTitle">{question.title}</h2>
//         <p className="questionType">Type: {question.type}</p>
//         <p className="questionContent">{question.content}</p>
//       </div>

//       {/* Answers Section */}
//       <div className="answersSection">
//         <h3 className="answersTitle">Answers from the Community</h3>

//         {answers.length === 0 ? (
//           <p>No answers yet. Be the first to reply!</p>
//         ) : (
//           answers.map((ans) => (
//             <div key={ans.id} className="answerItem">
//               <div className="userInfo">
//                 <img
//                   src={ans.user?.avatar || "/default-avatar.png"}
//                   alt="avatar"
//                   className="avatar"
//                 />
//                 <span className="username">
//                   {ans.user?.name || "Anonymous"}
//                 </span>
//               </div>
//               <div className="answerContent">{ans.content}</div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Post Answer Section */}
//       <div className="postAnswer">
//         <textarea
//           className="answerInput"
//           placeholder="Write your answer..."
//           value={newAnswer}
//           onChange={(e) => setNewAnswer(e.target.value)}
//         ></textarea>
//         <button className="postButton" onClick={handleSubmit}>
//           Post Answer
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Answer;


//for developer mode only 
import React, { useState } from "react";
import styles from "./Answer.module.css";

const Answer = ({ question, answers, onPostAnswer, currentUser }) => {
  const [newAnswer, setNewAnswer] = useState("");

  const handleSubmit = () => {
    if (!newAnswer.trim()) return;
    onPostAnswer(newAnswer.trim());
    setNewAnswer("");
  };

  return (
    <div className={styles.answerPage}>
      <div className={styles.questionSection}>
        <h2 className={styles.questionTitle}>{question.title}</h2>
        <p className={styles.questionContent}>
          {question.description || question.content}
        </p>
      </div>

      <div className={styles.answersSection}>
        <h3 className={styles.answersTitle}>Answers</h3>
        {answers.length === 0 && <p>No answers yet. Be the first!</p>}
        {answers.map((a) => (
          <div key={a.id} className={styles.answerItem}>
            <div className={styles.userInfo}>
              <img
                src={a.user.avatar || "/default-avatar.png"}
                alt={a.user.name}
                className={styles.avatar}
              />
              <span className={styles.username}>{a.user.name}</span>
            </div>
            <div className={styles.answerContent}>{a.content}</div>
          </div>
        ))}
      </div>

      <div className={styles.postAnswer}>
        <textarea
          className={styles.answerInput}
          placeholder="Write your answer..."
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button className={styles.postButton} onClick={handleSubmit}>
          Post Answer
        </button>
      </div>
    </div>
  );
};

export default Answer;

