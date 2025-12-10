import React, { useState } from "react";

const FacilityCard = ({ facility }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`facility-card-modern ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Animated background gradient */}
      <div className="card-bg-gradient" />

      {/* Card content */}
      <div className="card-content">
        {/* Header with icon and title */}
        <div className="card-header">
          <div className="header-left">
            <div className="facility-emoji">
              {facility.icon}
            </div>
            <h2 className="facility-title">{facility.title}</h2>
          </div>
          <i className={`bi bi-chevron-down chevron-icon ${isOpen ? "rotated" : ""}`}></i>
        </div>

        {/* Always visible description */}
        <p className="facility-description">
          {facility.description}
        </p>

        {/* Expandable content */}
        <div className={`expandable-content ${isOpen ? "expanded" : ""}`}>
          <div className="content-inner">
            <h3 className="features-title">Key Features:</h3>
            <ul className="features-list">
              {facility.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="feature-item"
                  style={{
                    animationDelay: `${idx * 50}ms`,
                  }}
                >
                  <span className="feature-dot" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="card-border" />
    </div>
  );
};

export default FacilityCard;