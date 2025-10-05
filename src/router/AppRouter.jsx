import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Signup from "../components/Auth/Signup";
import Login from "../components/Auth/Login";

// import HomePage from "../pages/HomePage";
// import About from "../components/About/About";
// import AuthPage from "../pages/AuthPage";
// import QuestionPage from "../pages/QuestionPage";
// import AnswerPage from "../pages/AnswerPage";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Signup />
      <Login />
    

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
        <Route path="/answers/:id" element={<AnswerPage />} />
      </Routes> */}
      <Footer />
    </Router>
  );
};

export default AppRouter;
