import React from "react";
import "./style.css";

export default function DailyAlerts(params) {
  return (
    <div className="daily-alerts">
      <div className="daily-alerts-title">
        <h1>Daily Alerts</h1>
      </div>

      <div className="daily-alerts-items">
        <div
          className="daily-alerts-item"
          // style={{ backgroundColor: "#007bff" }}
        >
          <h3>Functional Tests</h3>
          <span>3</span>
        </div>

        <div
          className="daily-alerts-item"
          // style={{ backgroundColor: "#17a2b8" }}
        >
          <h3>Version Changes</h3>
          <span>1</span>
        </div>
        <div
          className="daily-alerts-item"
          // style={{ backgroundColor: "#dc3545", color: "#fff" }}
        >
          <h3>Deleted Tasks</h3>
          <span>4</span>
        </div>
        <div
          className="daily-alerts-item"
          // style={{ backgroundColor: "#218838" }}
        >
          <h3>Total Changes</h3>
          <span>8</span>
        </div>
      </div>
    </div>
  );
}
