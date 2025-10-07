// import { useContext, useEffect, useState } from "react";
// import Home from "../components/Home/Home";
// import { AuthContext } from "../context/AuthContext";
// import { getAllQuestions } from "../services/api";

// const HomePage = () => {
//   const { user } = useContext(AuthContext); // get logged-in user
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const res = await getAllQuestions();
//         setQuestions(res.data.questions); // from API document
//       } catch (err) {
//         console.error("Failed to fetch questions:", err);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   return <Home currentUser={user} questions={questions} />;
// };

// export default HomePage;

// src/pages/HomePage.jsx
import { useEffect, useState, useContext } from "react";
import Home from "../components/Home/Home";
import { AuthContext } from "../context/AuthContext";
import { getAllQuestions } from "../services/api";

const HomePage = () => {
  const { user } = useContext(AuthContext) || {}; // Safe check
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getAllQuestions();
        setQuestions(res.data.questions || []); // handle empty
      } catch (err) {
        console.error("❌ Failed to fetch questions:", err);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <Home
      currentUser={user || { username: "Guest" }} // fallback for dev
      questions={questions}
    />
  );
};

export default HomePage;
