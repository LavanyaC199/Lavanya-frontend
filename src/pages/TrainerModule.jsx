import React from "react";

function TrainerModule() {
  return (
    <section className="py-5 module-page">
      <div className="container">
        <h2 className="fw-bold mb-3">Trainer Module</h2>
        <p className="text-muted mb-4">
          Trainers can manage clients, create workout plans and monitor
          progress.
        </p>

        <div className="row g-4">
          <div className="col-md-7">
            <ul className="list-group shadow-sm">
              <li className="list-group-item">
                Register as a trainer and upload verification documents.
              </li>
              <li className="list-group-item">
                Create and manage workout & nutrition programs for clients.
              </li>
              <li className="list-group-item">
                Approve or reschedule appointment requests.
              </li>
              <li className="list-group-item">
                Track their own earnings and payouts.
              </li>
              <li className="list-group-item">
                Receive ratings, reviews, and feedback from clients.
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <div className="info-panel">
              <h5>Possible UI sections</h5>
              <ul className="small text-muted">
                <li>Trainer dashboard with today’s sessions</li>
                <li>Client list with progress summary</li>
                <li>Plan builder (workout templates)</li>
                <li>Payout / earnings page</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainerModule;
