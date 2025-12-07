import React from "react";

function WorkoutNutrition() {
  return (
    <section className="py-5 module-page">
      <div className="container">
        <h2 className="fw-bold mb-3">Workout & Nutrition Tracking</h2>
        <p className="text-muted mb-4">
          This module lets users record day-to-day workouts and diet and
          receive intelligent recommendations.
        </p>

        <div className="row g-4">
          <div className="col-md-7">
            <ul className="list-group shadow-sm">
              <li className="list-group-item">
                Track exercise routines: sets, reps, weights, duration.
              </li>
              <li className="list-group-item">
                Log meals with calories and macronutrients.
              </li>
              <li className="list-group-item">
                Set reminders for workouts and meals.
              </li>
              <li className="list-group-item">
                View progress charts for weight, BMI & strength.
              </li>
              <li className="list-group-item">
                Receive recommendations based on goals and health metrics.
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <div className="info-panel">
              <h5>Future Scope</h5>
              <ul className="small text-muted">
                <li>Mobile app for iOS & Android</li>
                <li>Integration with wearables (Fitbit, Apple Watch)</li>
                <li>AI-generated workout & diet plans</li>
                <li>Integration with health insurance providers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutNutrition;
