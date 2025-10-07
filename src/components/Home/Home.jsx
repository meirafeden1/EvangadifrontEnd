// // src/components/Home/Home.jsx
// import React, { useState } from "react";
// import styles from "./Home.module.css";
// import { useNavigate } from "react-router-dom";

// const Home = ({ currentUser, questions }) => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter questions by search term
//   const filteredQuestions = questions.filter(
//     (q) =>
//       q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       q.content.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className={styles.homeWrapper}>
//       {/* Top row: Ask Question + Welcome */}
//       <div className={styles.topRow}>
//         <button
//           className={styles.askButton}
//           onClick={() => navigate("/auth")} // Redirect to auth or question form
//         >
//           Ask Question
//         </button>
//         <div className={styles.welcomeText}>
//           Welcome, {currentUser.username}
//         </div>
//       </div>

//       {/* Search bar */}
//       <div className={styles.searchBar}>
//         <input
//           type="text"
//           placeholder="Search questions..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Questions list */}
//       <section className={styles.usersSection}>
//         <h2>Recent Questions</h2>
//         {filteredQuestions.map((q) => (
//           <div
//             key={q.question_id}
//             className={styles.userRow}
//             onClick={() => navigate(`/questions/${q.question_id}`)}
//           >
//             <div className={styles.userInfo}>
//               <img
//                 src="/default-avatar.png"
//                 alt="avatar"
//                 className={styles.avatar}
//               />
//               <span className={styles.username}>{q.user_name}</span>
//               <span className={styles.questionPreview}>
//                 {q.title.length > 50 ? q.title.slice(0, 50) + "..." : q.title}
//               </span>
//             </div>
//             <button className={styles.detailButton}>&gt;</button>
//           </div>
//         ))}
//         {filteredQuestions.length === 0 && <p>No questions found.</p>}
//       </section>
//     </div>
//   );
// };

// export default Home;
// src/components/Home/Home.jsx
import { useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = ({ currentUser, questions = [] }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuestions = questions.filter((q) =>
    (q.title || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.homeWrapper}>
      {/* Top Row */}
      <div className={styles.topRow}>
        <button
          className={styles.askButton}
          onClick={() => navigate("/questions")}
        >
          Ask Question
        </button>
        <div className={styles.welcomeText}>
          Welcome, {currentUser?.username || "Guest"}
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Questions List */}
      <section className={styles.usersSection}>
        <h2>Recent Questions</h2>
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => (
            <div
              key={q.question_id || q.id}
              className={styles.userRow}
              onClick={() => navigate(`/questions/${q.question_id || q.id}`)}
            >
              <div className={styles.userInfo}>
                <img
                  src="/default-avatar.png"
                  alt="avatar"
                  className={styles.avatar}
                />
                <span className={styles.username}>
                  {q.user_name || "Unknown"}
                </span>
                <span className={styles.questionPreview}>
                  {q.title?.length > 50
                    ? q.title.slice(0, 50) + "..."
                    : q.title}
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
