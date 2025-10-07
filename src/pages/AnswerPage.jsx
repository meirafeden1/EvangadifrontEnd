import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Answer from "../components/Answer/Answer";
import { getSingleQuestion, getAnswers, postAnswer } from "../services/api";

const AnswerPage = () => {
  const { questionId } = useParams();
  const { user } = useContext(AuthContext);

  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch question and its answers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resQuestion = await getSingleQuestion(questionId);
        setQuestion(resQuestion.data.question);

        const resAnswers = await getAnswers(questionId);
        setAnswers(resAnswers.data.answers);
      } catch (err) {
        console.error("Error fetching question or answers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [questionId]);

  // Post new answer
  const handlePostAnswer = async (content) => {
    if (!user) {
      alert("Please login to post an answer.");
      return;
    }

    try {
      await postAnswer({ questionid: questionId, answer: content });
      const resAnswers = await getAnswers(questionId);
      setAnswers(resAnswers.data.answers);
    } catch (err) {
      console.error("Error posting answer:", err);
      alert("Failed to post answer. Try again.");
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (!question)
    return <p style={{ textAlign: "center" }}>Question not found</p>;

  return (
    <Answer
      question={question}
      answers={answers}
      onPostAnswer={handlePostAnswer}
      currentUser={user}
    />
  );
};

export default AnswerPage;


