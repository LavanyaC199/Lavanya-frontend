import React from "react";

function AdminModule() {
  return (
    <section className="py-5 module-page">
      <div className="container">
        <h2 className="fw-bold mb-3">Admin Module</h2>
        <p className="text-muted mb-4">
          Admins control the entire platform, manage roles, and monitor system
          health.
        </p>

        <div className="row g-4">
          <div className="col-md-7">
            <ul className="list-group shadow-sm">
              <li className="list-group-item">
                Manage user accounts, trainers and fitness programs.
              </li>
              <li className="list-group-item">
                Approve new trainers and services.
              </li>
              <li className="list-group-item">
                Monitor user progress, activities and suspicious behaviour.
              </li>
              <li className="list-group-item">
                Handle dispute resolution for payments and bookings.
              </li>
              <li className="list-group-item">
                Generate reports on transactions and overall platform usage.
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <div className="info-panel">
              <h5>Admin dashboard ideas</h5>
              <ul className="small text-muted">
                <li>Charts of active users & sessions</li>
                <li>Approval queue for new trainers</li>
                <li>Payment / revenue analytics</li>
                <li>System logs & notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminModule;
