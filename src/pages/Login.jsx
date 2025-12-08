import React, { useState } from "react";
import api from "../api/client";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Handle form changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await api.post("/auth/login", form);

      setMessage(`Login successful! Welcome ${res.data.user.name} 😍`);
      console.log("User logged in:", res.data.user);

      // 👉 Save token for future use
      localStorage.setItem("token", res.data.token);

      // 👉 Navigate to dashboard (later when you create it)
      // navigate("/dashboard");

    } catch (err) {
      console.error("Login Error:", err);
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center fw-bold">Login</h2>

      {/* Error Message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Success Message */}
      {message && <div className="alert alert-success">{message}</div>}

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0 rounded-4">
        
        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            name="email"
            type="email"
            className="form-control form-control-lg"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            name="password"
            type="password"
            className="form-control form-control-lg"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Button */}
        <button type="submit" className="btn btn-accent w-100 btn-lg">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
