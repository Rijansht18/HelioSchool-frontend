import React, { useState } from 'react'
import '../../styles/Team/TeachingTeam.css'

const TeachingTeam = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const teachers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Primary Guide",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      certification: "AMI Primary Certified",
      experience: "8+ years Montessori experience",
      education: "M.Ed. in Montessori Education",
      specialty: "Practical Life & Sensorial Development",
      quote: "The child is both a hope and a promise for mankind.",
      color: "#667eea"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Toddler Guide",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      certification: "AMS Infant-Toddler Certified",
      experience: "6+ years early childhood education",
      education: "B.Ed. in Early Childhood Education",
      specialty: "Language Acquisition & Motor Skills",
      quote: "Every child deserves a champion.",
      color: "#764ba2"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Elementary Guide",
      image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      certification: "AMI Elementary Certified",
      experience: "10+ years teaching experience",
      education: "M.A. in Child Development",
      specialty: "Cosmic Education & Mathematics",
      quote: "Education is a natural process carried out by the child.",
      color: "#f093fb"
    },
    {
      id: 4,
      name: "David Chen",
      role: "Primary Assistant Guide",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      certification: "AMS Primary Certified",
      experience: "4+ years Montessori experience",
      education: "B.A. in Psychology",
      specialty: "Classroom Management & Observation",
      quote: "Help me to do it myself.",
      color: "#f5576c"
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "Toddler Assistant Guide",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      certification: "AMS Assistant Certified",
      experience: "3+ years early childhood education",
      education: "Diploma in Early Childhood Care",
      specialty: "Social-Emotional Development",
      quote: "Follow the child, they will show you what they need.",
      color: "#ff8a00"
    },
    {
      id: 6,
      name: "James Kim",
      role: "Elementary Assistant Guide",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      certification: "Montessori Elementary Training",
      experience: "5+ years teaching experience",
      education: "B.Sc. in Environmental Science",
      specialty: "Science & Cultural Studies",
      quote: "The environment must be rich in motives.",
      color: "#2ecc71"
    }
  ];

  const handleCardClick = (id) => {
    setFlippedCards(prev => 
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  return (
    <div className="teaching-team-container">
      <div className="team-header">
        <h1 className="team-title">Our Teaching Team</h1>
        <p className="team-subtitle">
          Certified Montessori guides dedicated to nurturing each child's unique potential 
          through observation, guidance, and a prepared environment.
        </p>
      </div>

      <div className="teachers-grid">
        {teachers.map((teacher) => (
          <div 
            key={teacher.id} 
            className={`teacher-card ${flippedCards.includes(teacher.id) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(teacher.id)}
          >
            <div className="card-inner">
              {/* Front of Card - Full Background */}
              <div className="card-front">
                <div 
                  className="teacher-full-background"
                  style={{ 
                    backgroundImage: `url(${teacher.image})`,
                    backgroundColor: teacher.color
                  }}
                >
                  <div className="background-gradient-overlay"></div>
                  <div className="teacher-info-overlay">
                    <div className="teacher-meta">
                      <h3 className="teacher-name">{teacher.name}</h3>
                      <div className="teacher-role">{teacher.role}</div>
                      <div className="teacher-badge" style={{ background: teacher.color }}>
                        <i className="bi bi-award"></i>
                        {teacher.certification}
                      </div>
                      <div className="teacher-experience">
                        <i className="bi bi-clock-history"></i>
                        <span>{teacher.experience}</span>
                      </div>
                    </div>
                    <div className="flip-hint">
                      <i className="bi bi-arrow-clockwise"></i>
                      <span>Click for details</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div className="card-back">
                <div className="back-content">
                  <div className="back-header">
                    <h3 className="back-name">{teacher.name}</h3>
                    <div className="back-role">{teacher.role}</div>
                  </div>
                  
                  <div className="back-details">
                    <div className="detail-item">
                      <i className="bi bi-award"></i>
                      <span>{teacher.certification}</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-clock-history"></i>
                      <span>{teacher.experience}</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-mortarboard"></i>
                      <span>{teacher.education}</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-star"></i>
                      <span>Specialty: {teacher.specialty}</span>
                    </div>
                  </div>

                  <div className="teacher-quote">
                    <i className="bi bi-quote"></i>
                    <p>{teacher.quote}</p>
                  </div>

                  <div className="flip-back">
                    <i className="bi bi-arrow-clockwise"></i>
                    <span>Click to return</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeachingTeam