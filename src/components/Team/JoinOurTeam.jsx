import React from 'react'
import '../../styles/Team/JoinOurTeam.css'

const JoinOurTeam = () => {
  return (
    <div className="join-team-container">
      <div className="join-team-banner">
        <div className="banner-content">
          <div className="banner-badge">
            <i className="bi bi-person-plus-fill"></i>
            <span>Join Our Team</span>
          </div>
          <h2 className="banner-title">Become Part of Our Montessori Community</h2>
          <p className="banner-description">
            We're always looking for passionate educators who share our commitment to 
            Montessori philosophy and child-centered education.
          </p>
          <div className="banner-cta">
            <a href="/careers" className="cta-button">
              View Career Opportunities
              <i className="bi bi-arrow-right"></i>
            </a>
            <a href="/contact" className="cta-button secondary">
              Send Your Resume
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
        <div className="banner-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>
    </div>
  )
}

export default JoinOurTeam