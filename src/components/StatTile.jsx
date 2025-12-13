import React from "react";

export function StatTile({ label, value, hint, icon, className = "" }) {
  return (
    <div className={`stat-tile ${className}`.trim()}>
      <div className="stat-top">
        <span className="stat-label">{label}</span>
        {icon && <span className="stat-icon">{icon}</span>}
      </div>
      <div className="stat-value">{value}</div>
      {hint && <div className="stat-hint">{hint}</div>}
    </div>
  );
}

export default StatTile;
