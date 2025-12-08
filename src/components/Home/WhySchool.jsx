import React from "react";
import "../../styles/Home/WhySchool.css";

const WhySchool = () => {
  const reasons = [
    {
      id: 1,
      title: "Mindful Curriculum",
      description:
        "Eunoia - Our proprietary framework integrating mindfulness, purposeful play, and social-emotional learning into every activity.",
      icon: "bi-book",
      color: "#3498db",
      stat: "Proven Framework",
    },
    {
      id: 2,
      title: "Nurturing Environment",
      description:
        "Sun-lit, thoughtfully prepared classrooms and natural play spaces designed to stimulate independence and discovery.",
      icon: "bi-tree",
      color: "#2ecc71",
      stat: "Designed Spaces",
    },
    {
      id: 3,
      title: "Expert Educators",
      description:
        "Carefully selected for intuition and warmth as much as credentials. Trained observers and gentle facilitators.",
      icon: "bi-person-badge",
      color: "#9b59b6",
      stat: "Certified Staff",
    },
    {
      id: 4,
      title: "Holistic Development",
      description:
        "Balancing cognitive growth with emotional intelligence, creative expression, and physical well-being.",
      icon: "bi-heart",
      color: "#e74c3c",
      stat: "Whole Child Focus",
    },
  ];

  return (
    <div className="why-school-container">
      <div className="container">
        <div className="why-school-header">
          <div className="header-left">
            <h2 className="why-subtitle">Discover the Difference</h2>
            <h1 className="why-title">
              Why <span className="highlight">Helio School?</span>
            </h1>
            <p className="why-description">
              At Helio School, we don't just teach—we cultivate. We provide the
              rich soil of experience, the gentle sunlight of guidance, and the
              supportive environment where your child's innate curiosity,
              creativity, and character can bloom naturally and joyfully.
            </p>
            <div className="years-badge">
              <div className="years-number">Est. 2062 B.S.</div>
              <div className="years-text">
                Over 19 years of educational excellence
              </div>
            </div>
          </div>

          <div className="header-right">
            <div className="main-stats">
              <div className="stat-item large">
                <div className="stat-icon">
                  <i className="bi bi-gem"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">Premium</div>
                  <div className="stat-label">Learning Experience</div>
                  <div className="stat-sub">
                    Quality education with personalized attention
                  </div>
                </div>
              </div>

              <div className="small-stats">
                <div className="stat-item small">
                  <div className="stat-icon">
                    <i className="bi bi-star"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">Best</div>
                    <div className="stat-label">Facilities</div>
                  </div>
                </div>

                <div className="stat-item small">
                  <div className="stat-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">Safety</div>
                    <div className="stat-label">First</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-reasons-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-card">
              <div
                className="reason-icon"
                style={{ backgroundColor: reason.color }}
              >
                <i className={`bi ${reason.icon}`}></i>
              </div>
              <div className="reason-content">
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
                <div className="reason-stat" style={{ color: reason.color }}>
                  {reason.stat}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="safety-highlight">
          <div className="safety-content">
            <div className="safety-icon-large">
              <i className="bi bi-shield-check"></i>
            </div>
            <div className="safety-text">
              <h3 className="safety-title">Comprehensive Safety & Service</h3>
              <p className="safety-description">
                Multiple layers of security protocols, certified emergency
                systems, and trained staff ensure your child learns and plays in
                the safest possible environment.
              </p>
              <div className="safety-points">
                <span className="safety-point">
                  <i className="bi bi-check-circle"></i>
                  CCTV Surveillance Systems
                </span>
                <span className="safety-point">
                  <i className="bi bi-check-circle"></i>
                  Certified Emergency Protocols
                </span>
                <span className="safety-point">
                  <i className="bi bi-check-circle"></i>
                  Secure Access Control
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySchool;
