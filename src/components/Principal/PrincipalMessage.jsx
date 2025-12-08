import React from 'react'
import '../../styles/Principal/PrincipalMessage.css'

const PrincipalMessage = () => {
  const messageSections = [
    {
      id: 1,
      icon: "bi-mortarboard-fill",
      title: "Academic Excellence and Innovation",
      paragraphs: [
        "Our school has consistently maintained high academic standards, and this is made possible through the combined efforts of dedicated teachers, motivated students, and supportive parents. Our faculty are not just educators—they are mentors, guides, and lifelong learners themselves.",
        "We encourage inquiry-based learning, collaborative projects, and the integration of technology to make classrooms more engaging and interactive. Our students are taught not just what to learn, but how to learn. This skill—of being independent learners—is one of the most powerful tools we can give them for the future.",
        "This year, we are introducing new programs that emphasize STEM (Science, Technology, Engineering, and Mathematics), the arts, environmental education, and entrepreneurship. Through these initiatives, we hope to give students the freedom and opportunity to explore different interests and find their true passions."
      ]
    },
    {
      id: 2,
      icon: "bi-heart-fill",
      title: "Character Education and Values",
      paragraphs: [
        "While academic success is important, we hold equally high regard for the values and principles that guide our actions. Our school believes in developing students into responsible citizens of the world. Honesty, integrity, respect, compassion, perseverance, and a sense of justice are instilled through daily interactions, co-curricular programs, and real-life applications.",
        "We also foster inclusivity and respect for diversity. In our classrooms, students learn to appreciate different cultures, viewpoints, and backgrounds. This prepares them to become empathetic global citizens who can collaborate with others, regardless of where they come from."
      ]
    },
    {
      id: 3,
      icon: "bi-people-fill",
      title: "Partnership with Parents",
      paragraphs: [
        "One of the most important pillars of a successful educational experience is the partnership between school and home. We are deeply grateful to the parents of our students for their unwavering trust, support, and involvement. Education is most effective when there is a strong and respectful collaboration between teachers and parents."
      ]
    },
    {
      id: 4,
      icon: "bi-arrow-up-right-circle-fill",
      title: "Looking Ahead",
      paragraphs: [
        "The world our students will inherit is vastly different from the one we grew up in. It is a world where change is the only constant. It is our responsibility to prepare students not just for the next exam, but for life itself. This means fostering adaptability, emotional intelligence, problem-solving, collaboration, and ethical reasoning.",
        "In conclusion, I would like to extend my heartfelt gratitude to every member of the school community. Thank you for placing your trust in us. Thank you for believing in the power of education. And thank you for walking with us as we nurture the minds and hearts of tomorrow's leaders.",
        "Let us continue to dream big, work hard, and support one another on this beautiful journey of learning."
      ]
    }
  ];

  return (
    <div className="principal-message-container">
      <div className="container">
        {/* Header Section */}
        <div className="message-header">
          <div className="header-content">
            <h1 className="message-title">
              Welcome from Our <span className="gradient-text">Principal</span>
            </h1>
            <div className="greeting">
              <p className="greeting-text">
                <strong>Dear Students, Parents, Teachers, and Well-wishers,</strong>
              </p>
              <p className="intro-text">
                It is with great pride and heartfelt enthusiasm that I welcome you all to another academic year at our esteemed institution. As Principal, I am honored to lead a school that is rich in tradition, committed to excellence, and constantly evolving to meet the demands of the future.
              </p>
            </div>
          </div>
          
          <div className="principal-card">
            <div className="principal-image-wrapper">
              <div className="principal-image">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Principal Hari Laxmi Shrestha"
                  className="principal-photo"
                />
                <div className="image-frame"></div>
                <div className="image-glow"></div>
              </div>
              <div className="principal-info">
                <h3 className="principal-name">Hari Laxmi Shrestha</h3>
                <div className="principal-title">Principal</div>
                <div className="school-name">Helio School</div>
                <div className="principal-contact">
                  <i className="bi bi-envelope"></i>
                  <span>principal@helioschool.edu.np</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Sections */}
        <div className="message-sections">
          {messageSections.map((section) => (
            <div key={section.id} className="message-card">
              <div className="card-header">
                <div className="section-icon">
                  <i className={`bi ${section.icon}`}></i>
                </div>
                <h3 className="section-title">{section.title}</h3>
              </div>
              <div className="card-content">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="content-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="card-decoration">
                <div className="deco-line"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Signature Section */}
        <div className="signature-section">
          <div className="signature-wrapper">
            <div className="signature-content">
              <p className="closing-text">Warm regards,</p>
              <div className="signature-name">Hari Laxmi Shrestha</div>
              <div className="signature-details">
                <span className="signature-title">Principal</span>
                <span className="signature-separator">•</span>
                <span className="signature-school">Helio School</span>
              </div>
              <div className="signature-stamp">
                <i className="bi bi-pen-fill"></i>
                <span>Hari Laxmi</span>
              </div>
            </div>
            <div className="signature-image">
              <div className="signature-ink"></div>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrincipalMessage