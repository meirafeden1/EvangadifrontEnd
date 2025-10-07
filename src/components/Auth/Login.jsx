import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import { AuthContext } from "../../context/AuthContext";
import { loginUser, setAuthToken } from "../../services/api";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await loginUser({ email, password });
      const { token } = res.data;

      setAuthToken(token);
      login(token, res.data.username, res.data.userid);

      navigate("/home"); // Redirect after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        <h1 className={styles.mainTitle}>Login to your account</h1>
        <h3 className={styles.subTitle}>
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/auth/signup")}
            className={styles.yellowButtonSmall}
          >
            Create an account
          </button>
        </h3>

        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.forgotPassword}>
            <button
              type="button"
              onClick={() => alert("Password reset coming soon!")}
              className={styles.linkButton}
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className={styles.blueButtonSmall}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
