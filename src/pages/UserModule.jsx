import React from "react";

function UserModule() {
  return (
    <section className="py-5 module-page">
      <div className="container">
        <h2 className="fw-bold mb-3">User Module</h2>
        <p className="text-muted mb-4">
          This section explains all the functionality available for end users
          (clients) in your Fitness Management System.
        </p>

        <div className="row g-4">
          <div className="col-md-7">
            <ul className="list-group shadow-sm">
              <li className="list-group-item">
                Register and create a profile with personal fitness details.
              </li>
              <li className="list-group-item">
                Set fitness goals and track daily, weekly and monthly progress.
              </li>
              <li className="list-group-item">
                Log workouts (sets, reps, weights) and nutrition (meals,
                calories, macros).
              </li>
              <li className="list-group-item">
                Book and manage appointments with trainers.
              </li>
              <li className="list-group-item">
                Make secure payments for services and view invoices.
              </li>
              <li className="list-group-item">
                Rate trainers and provide feedback on sessions.
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <div className="info-panel">
              <h5>UI ideas for implementation</h5>
              <p className="small text-muted">
                In the real React app, this module could be implemented using:
              </p>
              <ul className="small text-muted">
                <li>Profile page with editable user info</li>
                <li>Progress chart (using Recharts or Chart.js)</li>
                <li>Calendar view for booked sessions</li>
                <li>Wallet / payment history section</li>
              </ul>
              <p className="small text-muted mb-0">
                The backend later will expose REST APIs like
                <code>/api/users</code>, <code>/api/workouts</code>, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserModule;
