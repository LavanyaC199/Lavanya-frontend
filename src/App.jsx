import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import UserModule from "./pages/UserModule.jsx";
import TrainerModule from "./pages/TrainerModule.jsx";
import AdminModule from "./pages/AdminModule.jsx";
import WorkoutNutrition from "./pages/WorkoutNutrition.jsx";

function App() {
  return (
    <div className="app-wrapper d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* NEW AUTH PAGES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* MODULES */}
          <Route path="/user" element={<UserModule />} />
          <Route path="/trainer" element={<TrainerModule />} />
          <Route path="/admin" element={<AdminModule />} />
          <Route path="/workout" element={<WorkoutNutrition />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
