// import React, { useContext } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import AuthPage from "../pages/AuthPage";
// import HomePage from "../pages/HomePage";
// import About from "../components/About/About";
// import QuestionPage from "../pages/QuestionPage";
// import AnswerPage from "../pages/AnswerPage";
// import { AuthContext } from "../context/AuthContext";

// // Protected Route wrapper
// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) return <div>Loading...</div>;

//   return user ? children : <Navigate to="/auth/login" />;
// };

// const AppRouter = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Redirect root to /home */}
//         <Route path="/" element={<Navigate to="/home" />} />

//         {/* Home page */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <HomePage />
//             </ProtectedRoute>
//           }
//         />

//         {/* Auth pages */}
//         <Route path="/auth" element={<Navigate to="/auth/login" />} />
//         <Route path="/auth/login" element={<AuthPage />} />
//         <Route path="/auth/signup" element={<AuthPage />} />

//         {/* About page */}
//         <Route path="/about" element={<About />} />

//         {/* Question page */}
//         <Route
//           path="/questions/:id"
//           element={
//             <ProtectedRoute>
//               <QuestionPage />
//             </ProtectedRoute>
//           }
//         />

//         {/* Answer page */}
//         <Route
//           path="/answers/:id"
//           element={
//             <ProtectedRoute>
//               <AnswerPage />
//             </ProtectedRoute>
//           }
//         />

//         {/* Catch all */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default AppRouter;


// for development only
import React from "react";
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

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home page */}
        <Route path="/home" element={<HomePage />} />

        {/* Auth pages */}
        <Route path="/auth" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<AuthPage />} />
        <Route path="/auth/signup" element={<AuthPage />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Questions */}
        <Route path="/questions" element={<HomePage />} />
        <Route path="/questions/:id" element={< AnswerPage/>} />

        {/* Answers */}
        <Route path="/answers/:id" element={<AnswerPage />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
