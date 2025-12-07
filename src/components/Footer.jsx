import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-0 small">
          © {new Date().getFullYear()} FitnessVerse. All rights reserved.
        </p>
        <p className="mb-0 small">
         Fitness Website of Lavanya 💪
        </p>
      </div>
    </footer>
  );
}

export default Footer;
