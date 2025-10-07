// import  { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Answer from "../components/Answer/Answer";
// import { AuthContext } from "../context/AuthContext"; // ✅ use user info

// const AnswerPage = () => {
//   const { questionId } = useParams();
//   const { user } = useContext(AuthContext);
//   const [question, setQuestion] = useState(null);
//   const [answers, setAnswers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch question + answers
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/questions/${questionId}`
//         );
//         setQuestion(res.data.question);
//         setAnswers(res.data.answers);
//       } catch (err) {
//         console.error("Error fetching question:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [questionId]);

//   // ✅ Post new answer
//   const handlePostAnswer = async (content) => {
//     if (!user) {
//       alert("Please login to post an answer.");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/answers", {
//         question_id: questionId,
//         content,
//         user_id: user.id,
//       });
//       setAnswers((prev) => [...prev, res.data]);
//     } catch (err) {
//       console.error("Error posting answer:", err);
//     }
//   };

//   if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
//   if (!question)
//     return <p style={{ textAlign: "center" }}>Question not found</p>;

//   return (
//     <Answer
//       question={question}
//       answers={answers}
//       onPostAnswer={handlePostAnswer}
//     />
//   );
// };

// export default AnswerPage;





//for developer only
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Answer from "../components/Answer/Answer";

const AnswerPage = () => {
  const { id } = useParams(); // match /answers/:id
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dev-mode hardcoded data
    const devQuestion = {
      id,
      title: `Sample Question #${id}`,
      content: "This is a sample question content for development.",
      user: { name: "Alice", avatar: "/avatar1.png" },
    };
    const devAnswers = [
      {
        id: 1,
        user: { name: "Bob", avatar: "/avatar2.png" },
        content: "Sample answer 1",
      },
      {
        id: 2,
        user: { name: "Charlie", avatar: "/avatar3.png" },
        content: "Sample answer 2",
      },
    ];

    setQuestion(devQuestion);
    setAnswers(devAnswers);
    setLoading(false);
  }, [id]);

  const handlePostAnswer = (content) => {
    const newAnswer = {
      id: answers.length + 1,
      user: { name: "Current User", avatar: "/avatar-current.png" },
      content,
    };
    setAnswers([...answers, newAnswer]);
  };

  if (loading) return <p>Loading...</p>;
  if (!question) return <p>Question not found</p>;

  return (
    <Answer
      question={question}
      answers={answers}
      onPostAnswer={handlePostAnswer}
    />
  );
};

export default AnswerPage;


