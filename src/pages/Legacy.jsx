import React, { useEffect, useState } from "react"
import "../styles/Legacy/Legacy.css"

export default function Legacy() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const timelineEvents = [
    {
      year: "2067 B.S.",
      title: "Founded",
      description:
        "Helio School established as a small early-childhood learning center with a clear vision to create a warm, safe, and stimulating environment.",
    },
    {
      year: "Present",
      title: "500+ Graduates",
      description:
        "Successfully graduated over 500 students who have excelled academically and socially in higher institutions.",
    },
    {
      year: "Today",
      title: "Playgroup to LKG",
      description:
        "Offers comprehensive classes from Playgroup up to LKG with a team of caring and trained educators.",
    },
  ]

  return (
    <main className={`legacy-container ${isVisible ? "show" : ""}`}>
      {/* Header */}
      <section className="legacy-header">
        <h1 className="legacy-title">Our Legacy</h1>
        <div className="legacy-divider"></div>
      </section>

      {/* History Section */}
      <section className="legacy-section">
        <h2 className="section-title">A Journey of Growth</h2>
        <div className="legacy-card">
          <p>
            Established in 2067 B.S., Helio School has grown from a small early-childhood learning center into one of
            the most trusted foundational schools in Gatthaghar, Madhyapur Thimi. From the beginning, the school was
            founded with a clear vision—to create a warm, safe, and stimulating environment where young children can
            explore, learn, and develop essential life skills.
          </p>
          <p>
            Over the years, Helio School has remained dedicated to providing quality early education rooted in love,
            care, and strong educational principles.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="legacy-section">
        <h2 className="section-title">Our Achievements</h2>
        <div className="achievement-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🎓</div>
            <div className="achievement-title">500+ Graduates</div>
            <div className="achievement-description">
              Proudly graduated more than 500 students who continue to excel in higher studies.
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🌱</div>
            <div className="achievement-title">Strong Early Education</div>
            <div className="achievement-description">
              Providing exceptional foundational learning experiences from Playgroup to LKG.
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Section */}
      <section className="legacy-section">
        <h2 className="section-title">Cultural Integration & Values</h2>

        <div className="heritage-content">
          <p>
            Helio School integrates Nepali culture, values, and traditions into daily learning, ensuring that children
            grow with a sense of identity, respect, and belonging. Through festivals, programs, and community events,
            students experience joyful and meaningful cultural connections.
          </p>

          <div className="heritage-grid">
            <div className="heritage-card">
              <div className="icon-large">🎭</div>
              <div className="heritage-title">Cultural Programs</div>
              <p>Celebrating Nepali culture and traditions with enthusiasm.</p>
            </div>

            <div className="heritage-card">
              <div className="icon-large">🏛️</div>
              <div className="heritage-title">Heritage Values</div>
              <p>Building identity, respect, and belonging in every learner.</p>
            </div>

            <div className="heritage-card">
              <div className="icon-large">👥</div>
              <div className="heritage-title">Community Events</div>
              <p>Connecting students with the community joyfully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="legacy-section">
        <h2 className="section-title">Timeline</h2>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {timelineEvents.map((event, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-title">{event.title}</div>
              <div className="timeline-content">{event.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="legacy-section">
        <div className="vision-card">
          <h2 className="vision-title">Our Vision for the Future</h2>
          <p className="vision-text">
            Helio School continues to shape confident, curious, and compassionate young learners ready for future
            academic challenges—with a strong foundation, caring educators, and a commitment to excellence.
          </p>
        </div>
      </section>
    </main>
  )
}
