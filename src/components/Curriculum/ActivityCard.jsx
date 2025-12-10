import React, { useState } from "react";

const ActivityCard = ({ activity }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="activity-card">
      <div className="activity-header">
        <div className="activity-icon">{activity.icon}</div>
        <div className="activity-info">
          <h3 className="activity-title">{activity.title}</h3>
          <span className="age-group">{activity.ageGroup}</span>
        </div>
      </div>
      
      <p className="activity-description">{activity.description}</p>
      
      <button 
        className="expand-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "View Activities"}
        <span className={`expand-icon ${isExpanded ? "expanded" : ""}`}>▼</span>
      </button>
      
      {isExpanded && (
        <div className="activities-list">
          <h4>Key Activities:</h4>
          <ul>
            {activity.activities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;