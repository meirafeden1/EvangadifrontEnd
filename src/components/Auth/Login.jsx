import React, { useState } from "react";
import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      console.log("Login successful:", res.data);
      navigate("/home");
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
            onClick={() => navigate("/signup")}
            className={styles.yellowButtonSmall}
          >
            Create an account
          </button>
        </h3>

        <form onSubmit={handleSubmit} className={styles.signupForm}>
          {/* Email */}
          <div className={styles.formRow}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className={styles.formRow}>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Error message */}
          {error && <p className={styles.error}>{error}</p>}

          {/* Forgot password */}
          <div className={styles.forgotPassword}>
            <button
              type="button"
              onClick={() => alert("Password reset coming soon!")}
              className={styles.linkButton}
            >
              Forgot password?
            </button>
          </div>

          {/* Login button */}
          <button type="submit" className={styles.blueButtonSmall}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
