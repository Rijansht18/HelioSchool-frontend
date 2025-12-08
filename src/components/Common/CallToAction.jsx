import React from "react";
import "../../styles/common/CallToAction.css";

const CallToAction = ({
  title = "Join us for a World-Class Education",
  subtitle = "Admissions Open",
  buttonText = "Inquire Now",
  location = "Madhyapur Thimi, Gathaghar",
  showLocation = true,
  onClick = () => {},
  childImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoeA_9p2yoyHMoVkwSwZM5CGkTh7yVXrVVWQ&s"
}) => {
  return (
    <div className="cta-wrapper">
      {/* Floating Child Image */}
      <div className="cta-child-image">
        <img src={childImage} alt="Child" />
      </div>

      {/* Main CTA */}
      <div className="cta-container modern">
        <div className="cta-overlay"></div>

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

        {/* Decorations */}
        <div className="cta-decoration">
          <div className="deco-floating"></div>
          <div className="deco-floating small"></div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
