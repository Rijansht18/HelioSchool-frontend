import React from 'react'
import '../../styles/about/LeadershipTeam.css'

const LeadershipTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Founder & Director",
      qualification: "AMS Certified, Ph.D. in Child Development",
      description: "With over 15 years of Montessori experience, Sarah founded Helio with a vision to create a truly child-centered learning community.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Head Montessori Guide",
      qualification: "AMI Certified, M.Ed. in Montessori Education",
      description: "Michael brings warmth and expertise to the classroom, specializing in creating engaging prepared environments for young learners.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Toddler Program Lead",
      qualification: "AMS Infant-Toddler Certified",
      description: "Priya's gentle approach helps our youngest learners develop independence and confidence in their first school experience.",
      image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="leadership-team-container">
      <div className="lt-image">
        <img 
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80" 
          alt="Leadership Team" 
          className="image-main"
        />
        <div className="image-overlay"></div>
      </div>

      <div className="lt-content">
        <div className="lt-header">
          <h2 className="lt-subtitle">Meet Our Guides</h2>
          <h1 className="lt-title">Leadership Team</h1>
          <p className="lt-description">
            Our certified Montessori guides are the heart of Helio. They are carefully selected 
            for their expertise, warmth, and commitment to each child's unique journey.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="image-frame"></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <div className="team-qualification">
                  <i className="bi bi-award"></i>
                  {member.qualification}
                </div>
                <p className="team-description">{member.description}</p>
                <div className="team-social">
                  <a href="#" className="social-link">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="bi bi-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeadershipTeam