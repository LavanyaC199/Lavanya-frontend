import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="auth-section d-flex align-items-center py-5">
      <div className="container">
        <div className="row g-5 align-items-center justify-content-center">

          <div className="col-md-6">
            <div className="auth-card p-4 shadow-lg rounded-4">
              <h3 className="fw-bold mb-3">Create Account 📝</h3>
              <p className="text-muted mb-4">Join FitnessVerse and start tracking your goals.</p>

              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="John" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Doe" />
                </div>

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
