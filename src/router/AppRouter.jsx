import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import About from "../components/About/About";
import QuestionPage from "../pages/QuestionPage";
import AnswerPage from "../pages/AnswerPage";

import { AuthContext } from "../context/AuthContext";

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; // wait for context

  if (!user) return <Navigate to="/auth/login" />;

  return children;
};


const AppRouter = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Root redirect */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home page (protected) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* Auth pages */}
        <Route path="/auth" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<AuthPage />} />
        <Route path="/auth/signup" element={<AuthPage />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Question pages (protected) */}
        <Route
          path="/questions/:question_id"
          element={
            <ProtectedRoute>
              <QuestionPage />
            </ProtectedRoute>
          }
        />

        {/* Answer pages (protected) */}
        <Route
          path="/answers/:answer_id"
          element={
            <ProtectedRoute>
              <AnswerPage />
            </ProtectedRoute>
          }
        />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default AppRouter;

