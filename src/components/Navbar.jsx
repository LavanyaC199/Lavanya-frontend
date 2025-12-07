import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Fitness<span className="text-accent">Verse</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">
                User Module
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/trainer">
                Trainer Module
              </NavLink>
            </li>
       <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admin Module
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/workout">
                Workout & Nutrition
              </NavLink>
            </li>
                    <li className="nav-item">
  <NavLink className="nav-link" to="/login">Login</NavLink>
</li>

<li className="nav-item ms-lg-2">
  <NavLink to="/register" className="btn btn-accent btn-sm">
    Sign Up
  </NavLink>
</li>
         
            <li className="nav-item ms-lg-3">
              <a href="#pricing" className="btn btn-accent btn-sm">
                View Plans
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
