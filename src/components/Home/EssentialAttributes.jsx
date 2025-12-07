import React, { useState } from 'react'
import '../../styles/home/EssentialAttributes.css'

const essentialData = [
  {
    id: 1,
    title: "The Mindful Curriculum",
    philosophy: "True education begins with awareness.",
    practice: "Eunoia — our proprietary framework that integrates mindfulness, purposeful play, and social-emotional learning into every activity. It cultivates focused, empathetic, and resilient thinkers.",
    icon: "bi-book"
  },
  {
    id: 2,
    title: "The Nurturing Guide",
    philosophy: "The teacher is the heart of the learning environment.",
    practice: "Selecting educators for their intuition and warmth as much as their credentials. Our guides are trained observers and facilitators who build trusting relationships, nurturing each child's unique spark.",
    icon: "bi-person-badge"
  },
  {
    id: 3,
    title: "The Intentional Environment",
    philosophy: "The space itself is a teacher.",
    practice: "Designing sun-lit, thoughtfully prepared classrooms and natural play spaces that stimulate independence and discovery. Every corner, from the sensory garden to the atelier, is crafted to inspire wonder and belonging.",
    icon: "bi-tree"
  },
  {
    id: 4,
    title: "The Safe Ecosystem",
    philosophy: "Security is the foundation for fearless exploration.",
    practice: "A multi-layered promise of safety—from secure access and live-tracked transport to certified protocols and transparent communication. Here, children explore bravely, and parents relax fully.",
    icon: "bi-shield-check"
  },
  {
    id: 5,
    title: "The Connected Community",
    philosophy: "Growth flourishes in partnership.",
    practice: "Fostering a collaborative culture among children, educators, and families. Through open communication, shared events, and a spirit of inclusion, we build a supportive network that extends learning beyond the classroom.",
    icon: "bi-people"
  },
  {
    id: 6,
    title: "The Holistic Growth",
    philosophy: "We educate the whole child.",
    practice: "Balancing cognitive development with emotional intelligence, creative expression, and physical well-being. Our integrated approach ensures children develop not just academic readiness, but the character and confidence for life.",
    icon: "bi-heart"
  }
];

const EssentialAttributes = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  
  const handleCardClick = (id) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="essential-attributes-container">
      <div className="container">
        <div className="essential-header">
        <h2 className="essential-subtitle">Essential Attributes</h2>
        <h1 className="essential-title">Helio School: The Essential Attributes</h1>
        <p className="essential-description">
          Six foundational pillars that define our approach to early childhood education
        </p>
      </div>
      
      <div className="attributes-grid">
        {essentialData.map((item) => (
          <div 
            key={item.id}
            className={`attribute-card ${flippedCards.includes(item.id) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(item.id)}
          >
            <div className="card-inner">
              {/* Front of Card */}
              <div className="card-front">
                <div className="card-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <div className="card-philosophy">
                  <span className="philosophy-label">Philosophy</span>
                  <p>{item.philosophy}</p>
                </div>
              </div>
              
              {/* Back of Card */}
              <div className="card-back">
                <div className="card-back-content">
                  <div className="practice-content">
                    <p className="practice-text">{item.practice}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default EssentialAttributes