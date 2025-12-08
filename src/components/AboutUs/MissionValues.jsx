import React from 'react'
import '../../styles/About/MissionValues.css'

const MissionValues = () => {
  const values = [
    {
      id: 1,
      icon: "bi-heart",
      title: "Respect for the Child",
      description: "We honor each child's unique developmental journey and individual learning pace."
    },
    {
      id: 2,
      icon: "bi-lightbulb",
      title: "Love of Learning",
      description: "Fostering natural curiosity and intrinsic motivation for lifelong education."
    },
    {
      id: 3,
      icon: "bi-people",
      title: "Community",
      description: "Building a nurturing environment where children, families, and educators thrive together."
    },
    {
      id: 4,
      icon: "bi-tree",
      title: "Harmony with Nature",
      description: "Connecting children with the natural world through outdoor exploration and environmental stewardship."
    }
  ];

  return (
    <div className="mission-values-container">
      <div className="mv-content">
        <div className="mv-header">
          <h2 className="mv-subtitle">Our Guiding Principles</h2>
          <h1 className="mv-title">Mission & Values</h1>
        </div>

        <div className="mission-section">
          <div className="mission-card">
            <div className="mission-icon">
              <i className="bi bi-compass"></i>
            </div>
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              To nurture independent, confident, and compassionate learners through authentic Montessori education, 
              preparing them not just for school, but for life.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <i className="bi bi-eye"></i>
            </div>
            <h3 className="mission-title">Our Vision</h3>
            <p className="mission-text">
              To be a beacon of Montessori excellence where every child discovers their unique potential 
              in a prepared environment that inspires wonder and growth.
            </p>
          </div>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <div className="value-icon">
                <i className={`bi ${value.icon}`}></i>
              </div>
              <div className="value-content">
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mv-image">
        <img 
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Montessori Classroom" 
          className="image-main"
        />
        <div className="image-overlay"></div>
      </div>
    </div>
  )
}

export default MissionValues