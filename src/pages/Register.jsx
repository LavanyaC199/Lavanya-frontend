// src/pages/Register.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/client";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user", // default role
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      // Backend expects: firstName, lastName, email, password, role
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        role: form.role,
      };

      // If api baseURL = "http://localhost:5000/api"
      const res = await api.post("/auth/register", payload);

      setMessage(res.data.message || "Account created successfully!");
      console.log("Registered user:", res.data.user);

      // Optional: clear form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "user",
      });
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
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
              <h3 className="fw-bold mb-3">Create Account 📝</h3>
              <p className="text-muted mb-4">
                Join FitnessVerse and start tracking your goals.
              </p>

              {error && <div className="alert alert-danger">{error}</div>}
              {message && <div className="alert alert-success">{message}</div>}

              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="John"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

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
                  <label className="form-label">Role</label>
                  <select
                    name="role"
                    className="form-select"
                    value={form.role}
                    onChange={handleChange}
                  >
                    <option value="user">User</option>
                    <option value="trainer">Trainer</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-accent w-100 py-2 rounded-pill"
                  >
                    Create Account
                  </button>
                </div>
              </form>

              <div className="text-center mt-3">
                <p className="small mb-0">
                  Already have an account?{" "}
                  <Link to="/login" className="fw-semibold text-accent">
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-5 d-none d-md-block">
            <div className="auth-image-card floating-card">
              <img
                src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg"
                className="img-fluid rounded-4"
                alt="register fitness"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
