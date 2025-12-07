import React from 'react'
import '../../styles/common/CallToAction.css'

const CallToAction = ({
  title = "Join us for a World-Class Educational Experience",
  subtitle = "Admissions Open",
  buttonText = "Inquire Now",
  location = "AT THE PARK",
  theme = "gradient", // gradient, light, dark
  showLocation = true,
  onClick = () => {}
}) => {
  return (
    <div className={`cta-container ${theme}`}>
      <div className="cta-content">
        <div className="cta-text">
          <h2 className="cta-subtitle">{subtitle}</h2>
          <h1 className="cta-title">{title}</h1>
        </div>
        
        <div className="cta-action">
          {showLocation && (
            <div className="cta-location">
              <i className="bi bi-geo-alt"></i>
              <span>{location}</span>
            </div>
          )}
          
          <button className="cta-button" onClick={onClick}>
            {buttonText}
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="cta-decoration">
        <div className="deco-circle deco-1"></div>
        <div className="deco-circle deco-2"></div>
        <div className="deco-circle deco-3"></div>
        <div className="deco-line"></div>
      </div>
    </div>
  )
}

export default CallToAction