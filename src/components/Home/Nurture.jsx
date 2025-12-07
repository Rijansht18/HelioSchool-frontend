import React, { useState } from "react";
import "../../styles/home/Nurture.css";

const nurtureData = [
  {
    id: 1,
    icon: "bi-check-circle",
    title: "The Helio Credibility: Rooted in Purpose",
    description:
      "We are more than a preschool; we are a learning community built on a proven philosophy of child-led, growth-minded education. Our credibility comes from our consistent results: children who transition to primary school not just academically ready, but socially confident, emotionally resilient, and passionately inquisitive. Our accreditations and happy parent community are testaments to our commitment.",
  },
  {
    id: 2,
    icon: "bi-person-badge",
    title: "Our Guiding Lights: Exceptional Teachers and Staff",
    description:
      "Our educators are the heart of Helio. They are carefully selected not only for their qualifications and experience but for their warmth, intuition, and passion for early childhood. They are trained observers and gentle facilitators who understand developmental milestones and know how to connect with each child individually, nurturing their confidence and love for learning.",
  },
  {
    id: 3,
    icon: "bi-heart",
    title: "Behavioral Development and Guidance: Building Kind Humans",
    description:
      "We believe discipline is about teaching, not punishing. Our approach to behavioral development is proactive and positive. Through social-emotional learning (SEL) programs, collaborative play, and mindful guidance, we help children understand their emotions, develop empathy, resolve conflicts, and build the foundational skills for kindness, respect, and strong character.",
  },
  {
    id: 4,
    icon: "bi-lightbulb",
    title: "Innovative Learning Curriculum: Igniting Curiosity",
    description:
      "Our Helio Exploratory Curriculum is a dynamic blend of play-based learning, emergent themes, and structured inquiry. We integrate nature, technology, arts, and practical life skills into projects that children care about. This innovative approach ensures learning is relevant, engaging, and deeply connected to the real world, fostering critical thinkers and creative problem-solvers.",
  },
  {
    id: 5,
    icon: "bi-tree",
    title: "Environment & Facilities: Designed for Discovery",
    description:
      "Our campus is a child's world, scaled for exploration and wonder. From sun-drenched, thoughtfully organized classrooms that act as 'third teachers' to our dedicated art studio, sensory garden, and imaginative play zones, every space at Helio is intentionally designed to stimulate discovery, independence, and a deep connection with the natural environment.",
  },
  {
    id: 6,
    icon: "bi-shield-check",
    title: "Safety Measures and Protocols: Your Child's Secure Haven",
    description:
      "Your child's safety is our non-negotiable priority. We maintain the highest standards with secure, access-controlled facilities, comprehensive CCTV monitoring, and stringent hygiene protocols. Our staff are trained in first aid and emergency procedures, and we foster a culture of transparency with regular updates and an open-door policy for parents. At Helio, peace of mind is built into every detail.",
  },
];

const Nurture = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
    setActiveItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="nurture-container">
      <div className=" container">
        <div className="nurture-header">
          <h1 className="nurture-title">
            Nurture your child's{" "}
            <span className="highlight">natural growth</span> with the right
            preschool.
          </h1>
          <p className="nurture-subtitle">
            At Helio School, we cultivate each child's unique potential through
            nurturing guidance, innovative learning, and a supportive
            environment where curiosity and creativity flourish.
          </p>
        </div>

        <div className="nurture-grid">
          <div className="left-column">
            {nurtureData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className={`nurture-item ${
                  activeItem === item.id ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="item-content">
                  <div className="item-icon-wrapper">
                    <i className={`bi ${item.icon} item-icon`}></i>
                  </div>
                  <div className="item-text">
                    <h3 className="item-title">{item.title}</h3>
                    <div className="item-preview">
                      {item.description.substring(0, 100)}...
                    </div>
                  </div>
                  <div className="item-indicator">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>

                {hoveredItem === item.id && (
                  <div className="item-description-expanded">
                    <div className="description-header">
                      <i className={`bi ${item.icon}`}></i>
                      <h4>{item.title}</h4>
                    </div>
                    <p>{item.description}</p>
                    <div className="description-footer">
                      <div className="learn-more">
                        <span>Learn more</span>
                        <i className="bi bi-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="right-column">
            {nurtureData.slice(3).map((item) => (
              <div
                key={item.id}
                className={`nurture-item ${
                  activeItem === item.id ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="item-content">
                  <div className="item-icon-wrapper">
                    <i className={`bi ${item.icon} item-icon`}></i>
                  </div>
                  <div className="item-text">
                    <h3 className="item-title">{item.title}</h3>
                    <div className="item-preview">
                      {item.description.substring(0, 100)}...
                    </div>
                  </div>
                  <div className="item-indicator">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>

                {hoveredItem === item.id && (
                  <div className="item-description-expanded">
                    <div className="description-header">
                      <i className={`bi ${item.icon}`}></i>
                      <h4>{item.title}</h4>
                    </div>
                    <p>{item.description}</p>
                    <div className="description-footer">
                      <div className="learn-more">
                        <span>Learn more</span>
                        <i className="bi bi-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nurture;
