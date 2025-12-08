import React, { useState } from 'react'
import '../../styles/home/Lifecycle.css'

const Lifecycle = () => {
  const [activeStage, setActiveStage] = useState(null);
  
  const journeyStages = [
    {
      id: 1,
      age: "2-3 Years",
      title: "Discovery Phase",
      description: "Sensory exploration and social foundation",
      color: "#3498db",
      position: "top-left",
      icon: "bi-search"
    },
    {
      id: 2,
      age: "3-4 Years",
      title: "Exploration Phase",
      description: "Language development and creative expression",
      color: "#2ecc71",
      position: "top-right",
      icon: "bi-compass"
    },
    {
      id: 3,
      age: "4-5 Years",
      title: "Building Phase",
      description: "Cognitive skills and emotional intelligence",
      color: "#9b59b6",
      position: "right-middle",
      icon: "bi-building"
    },
    {
      id: 4,
      age: "5-6 Years",
      title: "Preparation Phase",
      description: "Academic readiness and independence",
      color: "#e74c3c",
      position: "bottom-right",
      icon: "bi-rocket-takeoff"
    },
    {
      id: 5,
      age: "Graduation",
      title: "Transition Phase",
      description: "Confident transition to primary school",
      color: "#f39c12",
      position: "bottom-left",
      icon: "bi-mortarboard"
    }
  ];

  const handleStageClick = (id) => {
    if (activeStage === id) {
      setActiveStage(null);
    } else {
      setActiveStage(id);
    }
  };

  return (
    <div className="lifecycle-container">
      <div className="lifecycle-header">
        <h2 className="lifecycle-subtitle">The Journey</h2>
        <h1 className="lifecycle-title">Your Child's Growth Cycle at Helio</h1>
        <p className="lifecycle-description">
          A holistic journey from discovery to confident graduation
        </p>
      </div>
      
      <div className="journey-timeline">
        <div className="timeline-center">
          <div className="center-logo">
            <img src="/logo.png" alt="Helio School Logo" />
          </div>
          <div className="center-text">
            <div className="establish-date">Est. 2062 B.S.</div>
            <div className="center-title">Helio School</div>
            <div className="center-subtitle">Preschool Journey</div>
          </div>
        </div>
        
        {/* Timeline Circle */}
        <div className="timeline-circle">
          <div className="circle-path"></div>
          
          {journeyStages.map((stage) => (
            <div 
              key={stage.id} 
              className={`stage-point ${stage.position} ${activeStage === stage.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveStage(stage.id)}
              onMouseLeave={() => setActiveStage(null)}
              onClick={() => handleStageClick(stage.id)}
            >
              <div className="point-connector"></div>
              <div className="point-dot" style={{ backgroundColor: stage.color }}>
                <i className={`bi ${stage.icon}`}></i>
              </div>
              <div className="stage-content">
                <div className="stage-age" style={{ color: stage.color }}>
                  {stage.age}
                </div>
                <h3 className="stage-title">{stage.title}</h3>
                <p className="stage-description">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Start and End Points - Hidden on mobile via CSS */}
        <div className="journey-start">
          <div className="journey-marker start">
            <i className="bi bi-flag-fill"></i>
            <span>Start</span>
          </div>
          <div className="start-age">Age 2</div>
        </div>
        
        <div className="journey-end">
          <div className="journey-marker end">
            <i className="bi bi-trophy-fill"></i>
            <span>End</span>
          </div>
          <div className="end-age">Age 6</div>
        </div>
        
        {/* Safety Section - Responsive positioning */}
        <div className="safety-overlay">
          <div className="safety-card">
            <div className="safety-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3 className="safety-title">Safety & Service</h3>
            <p className="safety-description">
              Secure environment with certified protocols
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lifecycle