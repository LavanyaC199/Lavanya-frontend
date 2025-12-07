import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center gy-4">
            
            {/* LEFT SIDE CONTENT */}
            <div className="col-md-6">
              <p className="badge bg-dark-subtle text-dark fw-semibold mb-3 px-3 py-2 rounded-pill hero-badge">
                New • MERN Fitness Management System
              </p>

              <h1 className="display-5 fw-bold mb-3 hero-title">
                Manage your <span className="text-accent">fitness journey</span>{" "}
                in one interactive dashboard.
              </h1>

              <p className="lead text-muted mb-4">
                Track workouts, monitor nutrition, book trainers, manage
                payments and visualize progress — built with a modern MERN stack.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a href="#pricing" className="btn btn-accent btn-lg hero-cta">
                  Explore Memberships
                </a>
                <Link to="/user" className="btn btn-outline-light btn-lg border-2">
                  Try User Module →
                </Link>
              </div>

              <div className="d-flex gap-4 small text-light hero-stats">
                <div>
                  <span className="fw-bold">4+</span>
                  <div className="text-muted">Core Modules</div>
                </div>
                <div>
                  <span className="fw-bold">24/7</span>
                  <div className="text-muted">Progress Tracking</div>
                </div>
                <div>
                  <span className="fw-bold">Secure</span>
                  <div className="text-muted">Payment Gateway</div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGES */}
            <div className="col-md-6">
              {/* main card */}
              <div className="hero-image-card floating-card">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Fitness dashboard"
                  className="img-fluid rounded-4"
                />
                <div className="hero-image-overlay">
                  <h5 className="mb-1">Live Analytics</h5>
                  <p className="mb-0 small">
                    Track calories, workouts, performance & more.
                  </p>
                </div>
              </div>

              {/* mini card */}
              <div className="hero-mini-card shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=600&q=60"
                  alt="Trainer"
                />
                <div>
                  <p className="mb-0 fw-semibold">Personal Trainer Matched</p>
                  <span className="small text-muted">Based on your goals</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MODULE CARDS SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          
          <h2 className="text-center mb-4 fw-bold">Core Modules</h2>
          <p className="text-center text-muted mb-5">
             Admin, User, Trainer,
            and Workout & Nutrition tracking.
          </p>

          <div className="row g-4">

            {/* USER MODULE */}
            <div className="col-md-6 col-lg-3">
              <div className="module-card h-100">
                <div className="module-image-wrapper">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="User Module"
                  />
                </div>
                <div className="p-3">
                  <h5>User Module</h5>
                  <p className="small text-muted">
                    Users log workouts, meals, goals and track fitness progress.
                  </p>
                  <Link to="/user" className="stretched-link small fw-semibold">
                    View details →
                  </Link>
                </div>
              </div>
            </div>

            {/* TRAINER MODULE */}
            <div className="col-md-6 col-lg-3">
              <div className="module-card h-100">
                <div className="module-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/4164462/pexels-photo-4164462.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Trainer Module"
                  />
                </div>
                <div className="p-3">
                  <h5>Trainer Module</h5>
                  <p className="small text-muted">
                    Trainers create plans, review progress and manage clients.
                  </p>
                  <Link to="/trainer" className="stretched-link small fw-semibold">
                    View details →
                  </Link>
                </div>
              </div>
            </div>

            {/* ADMIN MODULE */}
            <div className="col-md-6 col-lg-3">
              <div className="module-card h-100">
                <div className="module-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Admin Module"
                  />
                </div>
                <div className="p-3">
                  <h5>Admin Module</h5>
                  <p className="small text-muted">
                    Approvals, payment monitoring, analytics & platform control.
                  </p>
                  <Link to="/admin" className="stretched-link small fw-semibold">
                    View details →
                  </Link>
                </div>
              </div>
            </div>

            {/* WORKOUT & NUTRITION */}
            <div className="col-md-6 col-lg-3">
              <div className="module-card h-100">
                <div className="module-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" width="250" height="60"
                    alt="Workout & Nutrition"
                  />
                </div>
                <div className="p-3">
                  <h5>Workout & Nutrition</h5>
                  <p className="small text-muted">
                    Track sets, reps, calories, macros and get recommendations.
                  </p>
                  <Link to="/workout" className="stretched-link small fw-semibold">
                    View details →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-4">Membership Plans</h2>
          <p className="text-center text-muted mb-5">
            Choose a plan for your SRS demo, similar to the THENZONE membership page.
          </p>

          <div className="row g-4 justify-content-center">

            {/* BASIC PLAN */}
            <div className="col-md-4">
              <div className="pricing-card">
                <h5 className="text-muted">Starter</h5>
                <h3 className="my-3">
                  ₹499<span className="fs-6 text-muted"> / month</span>
                </h3>
                <ul className="list-unstyled mb-4 small">
                  <li>✔ User module access</li>
                  <li>✔ 3 trainer sessions / month</li>
                  <li>✔ Basic workout tracking</li>
                  <li>✖ No advanced reports</li>
                </ul>
                <button className="btn btn-outline-dark w-100">Choose Starter</button>
              </div>
            </div>

            {/* POPULAR PLAN */}
            <div className="col-md-4">
              <div className="pricing-card pricing-card-popular position-relative">
                <span className="popular-badge">Most Popular</span>
                <h5 className="text-muted">Pro Fitness</h5>
                <h3 className="my-3">
                  ₹999<span className="fs-6 text-muted"> / month</span>
                </h3>
                <ul className="list-unstyled mb-4 small">
                  <li>✔ All 4 modules unlocked</li>
                  <li>✔ Unlimited trainer chat</li>
                  <li>✔ Progress analytics & reports</li>
                  <li>✔ Priority support</li>
                </ul>
                <button className="btn btn-accent w-100">Choose Pro</button>
              </div>
            </div>

            {/* ENTERPRISE PLAN */}
            <div className="col-md-4">
              <div className="pricing-card">
                <h5 className="text-muted">Enterprise</h5>
                <h3 className="my-3">
                  Custom<span className="fs-6 text-muted"> / month</span>
                </h3>
                <ul className="list-unstyled mb-4 small">
                  <li>✔ Gym / institution access</li>
                  <li>✔ Multi-role admin</li>
                  <li>✔ Custom integrations</li>
                  <li>✔ Dedicated manager</li>
                </ul>
                <button className="btn btn-outline-dark w-100">Contact Sales</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">

            {/* LEFT */}
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Why this project?</h3>
              <p className="text-muted">
        
    project description, objectives, modules, plans, and UI mapping.
              </p>

              <ul className="small text-muted">
                <li>MERN-based JavaScript tech stack</li>
                <li>Responsive, mobile-friendly design</li>
                <li>Interactive animations</li>
              </ul>
            </div>

            {/* RIGHT - CONTACT FORM */}
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Contact for Demo</h3>

              <form className="row g-3">
                <div className="col-md-6">
                  <input className="form-control" placeholder="Name" type="text" />
                </div>
                <div className="col-md-6">
                  <input className="form-control" placeholder="Email" type="email" />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Tell us about your fitness project..."
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-accent w-100">
                    Request Callback
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
