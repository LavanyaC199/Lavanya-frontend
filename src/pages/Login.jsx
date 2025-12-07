import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="auth-section d-flex align-items-center py-5">
      <div className="container">
        <div className="row g-5 align-items-center justify-content-center">

          <div className="col-md-6">
            <div className="auth-card p-4 shadow-lg rounded-4">
              <h3 className="fw-bold mb-3">Welcome Back 👋</h3>
              <p className="text-muted mb-4">Login to continue your fitness journey.</p>

              <form className="row g-3">
                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="you@example.com" />
                </div>

                <div className="col-12">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="••••••••" />
                </div>

                <div className="col-12">
                  <button type="button" className="btn btn-accent w-100 py-2 rounded-pill">
                    Login
                  </button>
                </div>
              </form>

              <div className="text-center mt-3">
                <p className="small mb-0">
                  Don't have an account?{" "}
                  <Link to="/register" className="fw-semibold text-accent">
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-5 d-none d-md-block">
            <div className="auth-image-card floating-card">
              <img
                src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg"
                className="img-fluid rounded-4"
                alt="fitness login"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Login;
