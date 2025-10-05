import React, { useState } from "react";
import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, firstName, lastName, email, password } = formData;

    if (!username || !firstName || !lastName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
      console.log("Signup successful:", res.data);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        <h1 className={styles.mainTitle}>Join the Network</h1>

        <h3 className={styles.subTitle}>
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className={styles.yellowButtonSmall}
          >
            Sign In
          </button>
        </h3>

        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <div className={styles.nameRow}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.termsSection}>
            <h3>
              I agree to the{" "}
              <button type="button" className={styles.yellowButtonSmall}>
                Privacy Policy
              </button>{" "}
              and{" "}
              <button type="button" className={styles.yellowButtonSmall}>
                Terms of Service
              </button>
            </h3>
          </div>

          <button type="submit" className={styles.blueButtonSmall}>
            Agree and Join
          </button>

          <h3 className={styles.bottomText}>
            <button
              type="button"
              className={styles.yellowButtonSmall}
              onClick={() => navigate("/login")}
            >
              Already have an account?
            </button>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Signup;
