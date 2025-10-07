import React, { useState, useEffect } from "react";
import Question from "../components/Question/Question";
import styles from "./QuestionPage.module.css";
import axios from "axios";

const API_URL = "http://localhost:5000/api/questions";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [search] = useState({ title: "", description: "" });
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch questions
  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setQuestions(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load questions. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Handle input changes for both posting and search
  const handleChange = (e, stateUpdater) => {
    const { name, value } = e.target;
    stateUpdater((prev) => ({ ...prev, [name]: value }));
  };

  // Post a new question
  const handlePostQuestion = async () => {
    if (!newQuestion.title.trim() || !newQuestion.description.trim()) {
      alert("Please enter both title and description.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(API_URL, newQuestion);
      setQuestions((prev) => [res.data, ...prev]);
      setNewQuestion({ title: "", description: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to post question. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Filtered results
  const filteredQuestions = questions.filter((q) => {
    const matchTitle = q.title
      ?.toLowerCase()
      .includes(search.title.toLowerCase());
    const matchDesc = q.description
      ?.toLowerCase()
      .includes(search.description.toLowerCase());
    return matchTitle && matchDesc;
  });

  return (
    <div className={styles.questionPageWrapper}>
      <h1 className={styles.pageTitle}>Questions</h1>

      {/* Steps to write a good question */}
      <div className={styles.stepsSection}>
        <h2>Steps to Write a Good Question</h2>
        <ul>
          <li>Be clear and concise</li>
          <li>Provide context and examples</li>
          <li>Check for duplicates</li>
          <li>Use proper tags</li>
        </ul>
      </div>

      {/* Post your question */}
      <div className={styles.postSection}>
        <h2>Post Your Question</h2>

        <input
          type="text"
          name="title"
          placeholder="Question title"
          value={newQuestion.title}
          onChange={(e) => handleChange(e, setNewQuestion)}
          className={styles.titleSearch}
        />
        <textarea
          name="description"
          placeholder="Describe your question..."
          value={newQuestion.description}
          onChange={(e) => handleChange(e, setNewQuestion)}
          className={styles.descriptionSearch}
        />
        <button
          onClick={handlePostQuestion}
          className={styles.postButton}
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Question"}
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
