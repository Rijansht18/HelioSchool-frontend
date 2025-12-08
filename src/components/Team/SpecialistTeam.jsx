import React from 'react'
import '../../styles/Team/SpecialistTeam.css'

const SpecialistTeam = () => {
  const specialists = [
    {
      id: 1,
      name: "Anna Park",
      role: "Art & Creative Expression",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Integrating art across the curriculum to foster creativity and self-expression.",
      icon: "bi-palette"
    },
    {
      id: 2,
      name: "Carlos Mendez",
      role: "Music & Movement",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Developing rhythm, coordination, and musical appreciation through movement and play.",
      icon: "bi-music-note-beamed"
    },
    {
      id: 3,
      name: "Lisa Thompson",
      role: "Physical Education",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Promoting physical fitness, teamwork, and healthy lifestyle habits.",
      icon: "bi-heart-pulse"
    },
    {
      id: 4,
      name: "Kenji Tanaka",
      role: "Gardening & Nature",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Connecting children with nature through hands-on gardening and environmental education.",
      icon: "bi-tree"
    }
  ];

  return (
    <div className="specialist-team-container">
      <div className="specialist-header">
        <h2 className="specialist-title">Specialist Teachers</h2>
        <p className="specialist-subtitle">
          Experts who enrich our curriculum with specialized skills and knowledge
        </p>
      </div>

      <div className="specialists-grid">
        {specialists.map((specialist) => (
          <div key={specialist.id} className="specialist-card">
            <div className="specialist-image">
              <img src={specialist.image} alt={specialist.name} />
              <div className="image-overlay"></div>
            </div>
            <div className="specialist-content">
              <div className="specialist-icon">
                <i className={`bi ${specialist.icon}`}></i>
              </div>
              <h3 className="specialist-name">{specialist.name}</h3>
              <div className="specialist-role">{specialist.role}</div>
              <p className="specialist-description">{specialist.description}</p>
              <div className="specialist-connect">
                <button className="connect-button">
                  <i className="bi bi-chat"></i>
                  <span>Connect</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecialistTeam