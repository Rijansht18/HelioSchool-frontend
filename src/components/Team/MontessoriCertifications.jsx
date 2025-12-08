import React from 'react'
import '../../styles/Team/MontessoriCertifications.css'

const MontessoriCertifications = () => {
  const certifications = [
    {
      id: 1,
      name: "AMI Certified",
      description: "Association Montessori Internationale",
      details: "Gold standard in Montessori teacher training",
      icon: "bi-award-fill",
      color: "#667eea"
    },
    {
      id: 2,
      name: "AMS Certified",
      description: "American Montessori Society",
      details: "Recognized Montessori accreditation",
      icon: "bi-shield-check",
      color: "#764ba2"
    },
    {
      id: 3,
      name: "MACTE Accredited",
      description: "Montessori Accreditation Council",
      details: "Quality assurance in Montessori education",
      icon: "bi-check-circle-fill",
      color: "#f093fb"
    },
    {
      id: 4,
      name: "First Aid & CPR",
      description: "Safety Certification",
      details: "All staff trained in emergency response",
      icon: "bi-heart-pulse",
      color: "#f5576c"
    },
    {
      id: 5,
      name: "Child Development",
      description: "Specialized Training",
      details: "Continuous professional development",
      icon: "bi-graph-up",
      color: "#ff8a00"
    },
    {
      id: 6,
      name: "Peace Education",
      description: "Conflict Resolution",
      details: "Training in Montessori peace curriculum",
      icon: "bi-peace",
      color: "#2ecc71"
    }
  ];

  return (
    <div className="certifications-container">
      <div className="certifications-header">
        <h1 className="certifications-title">Montessori Certifications</h1>
        <p className="certifications-subtitle">
          Our team holds recognized Montessori credentials and undergoes continuous professional development.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="certification-card">
            <div className="cert-icon" style={{ color: cert.color }}>
              <i className={`bi ${cert.icon}`}></i>
            </div>
            <div className="cert-content">
              <h3 className="cert-name">{cert.name}</h3>
              <div className="cert-description">{cert.description}</div>
              <p className="cert-details">{cert.details}</p>
            </div>
            <div className="cert-decoration" style={{ background: cert.color }}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MontessoriCertifications