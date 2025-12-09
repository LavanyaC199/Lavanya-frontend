// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/client";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      // Backend expects: email, password
      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      setMessage(res.data.message || "Login successful!");

      // Save token & user (optional but common)
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      // Redirect to dashboard / home
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Login failed. Please check your details."
      );
    }
  };

  return (
    <section className="auth-section d-flex align-items-center py-5">
      <div className="container">
        <div className="row g-5 align-items-center justify-content-center">
          {/* Form */}
          <div className="col-md-6">
            <div className="auth-card p-4 shadow-lg rounded-4">
              <h3 className="fw-bold mb-3">Welcome Back 👋</h3>
              <p className="text-muted mb-4">
                Login to continue your fitness journey.
              </p>

              {error && <div className="alert alert-danger">{error}</div>}
              {message && <div className="alert alert-success">{message}</div>}

              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-accent w-100 py-2 rounded-pill"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="text-center mt-3">
                <p className="small mb-0">
                  Don’t have an account?{" "}
                  <Link to="/register" className="fw-semibold text-accent">
                    Create one
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-5 d-none d-md-block">
            <div className="auth-image-card floating-card">
              <img
                src="https://images.pexels.com/photos/4164760/pexels-photo-4164760.jpeg" width="250" height="150"
                className="img-fluid rounded-4"
                alt="login fitness"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
