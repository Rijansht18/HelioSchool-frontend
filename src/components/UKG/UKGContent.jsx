import React, { useState } from "react";
import "../../styles/UKG/UKGContent.css";

const UKGContent = () => {
  const [showEnroll, setShowEnroll] = useState(false);
  const [form, setForm] = useState({ name: "", childName: "", age: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const teachers = [
    { name: "Ms. Karuna", role: "UKG Lead Teacher", bio: "7+ years of experience in early childhood and foundational academics.", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop" },
    { name: "Mr. Rahul", role: "Assistant Teacher", bio: "Specializes in phonics, reading fluency, and numeracy development.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" }
  ];

  const curriculum = [
    { title: "Advanced Phonics & Reading", desc: "Sound blending, sentence reading, comprehension practice.", icon: "bi-book-half" },
    { title: "Mathematics", desc: "Addition, subtraction, patterns, measurements, and problem-solving.", icon: "bi-calculator-fill" },
    { title: "Writing Skills", desc: "Cursive basics, structured writing, spelling, vocabulary.", icon: "bi-pen" },
    { title: "General Knowledge", desc: "Seasons, community helpers, environment, and basic science.", icon: "bi-globe" }
  ];

  const schedule = [
    { time: "09:00 AM", activity: "Morning Assembly & Warm-up" },
    { time: "09:30 AM", activity: "English / Phonics" },
    { time: "10:15 AM", activity: "Math Practice" },
    { time: "11:00 AM", activity: "Creative Activities / Writing" },
    { time: "11:45 AM", activity: "Storytime & Closing" }
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowEnroll(false);
      setSubmitted(false);
      setForm({ name: "", childName: "", age: "", phone: "", message: "" });
      alert("Enrollment request submitted successfully!");
    }, 600);
  }

  return (
    <div className="ukg-content">
      <div className="container">
        {/* Hero Section */}
        <div className="row hero-section">
          <div className="col-lg-7 hero-text">
            <div className="badge-tag">Ages 5-6 Years</div>
            <h1>Building strong academic foundations for Grade 1</h1>
            <p>The UKG curriculum is designed to enhance reading fluency, numeracy, writing skills, and general knowledge.</p>
            
            <div className="hero-buttons">
              <button onClick={() => setShowEnroll(true)} className="btn btn-primary">Book a Tour</button>
              <a href="#gallery" className="btn btn-outline">See Gallery</a>
            </div>

            <div className="info-cards">
              <div className="info-card">
                <i className="bi bi-journal-text"></i>
                <h4>Structured Learning</h4>
                <p>Foundation skills for primary grades</p>
              </div>
              <div className="info-card">
                <i className="bi bi-palette-fill"></i>
                <h4>Creative Activities</h4>
                <p>Craft, music, storytelling & more</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 hero-image">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1200&auto=format&fit=crop" alt="ukg kids" />
              <div className="image-caption">
                <p>UKG classrooms designed for confidence & independence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="row content-grid">
          {/* Left Column - Curriculum */}
          <div className="col-lg-8">
            <section id="curriculum" className="curriculum-section">
              <h2>Curriculum Overview</h2>
              <p className="section-subtitle">A well-structured academic foundation for primary readiness.</p>
              
              <div className="curriculum-grid">
                {curriculum.map((c, i) => (
                  <div key={i} className="curriculum-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <i className={`bi ${c.icon}`}></i>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Teachers Section */}
            <section id="teachers" className="teachers-section">
              <h2>Meet Our Teachers</h2>
              <div className="teachers-grid">
                {teachers.map((t, i) => (
                  <div key={i} className="teacher-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <img src={t.img} alt={t.name} />
                    <h4>{t.name}</h4>
                    <span className="role">{t.role}</span>
                    <p>{t.bio}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="gallery-section">
              <h2>Gallery</h2>
              <div className="gallery-grid">
                <img src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a02?q=80&w=800&auto=format&fit=crop" alt="gallery1" />
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" alt="gallery2" />
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800&auto=format&fit=crop" alt="gallery3" />
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-lg-4">
            <aside className="sidebar">
              <div className="sidebar-card quick-info">
                <h4>Quick Info</h4>
                <ul>
                  <li><i className="bi bi-calendar"></i> Age: 5 — 6 years</li>
                  <li><i className="bi bi-calendar-week"></i> Days: Mon — Fri</li>
                  <li><i className="bi bi-clock"></i> Hours: 9:00 AM — 12:00 PM</li>
                  <li><i className="bi bi-journal-check"></i> Includes: Books, worksheets, events</li>
                </ul>
              </div>

              <div id="schedule" className="sidebar-card schedule">
                <h4>Daily Schedule</h4>
                <div className="schedule-list">
                  {schedule.map((s, idx) => (
                    <div key={idx} className="schedule-item">
                      <span className="time">{s.time}</span>
                      <span className="activity">{s.activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card contact">
                <h4>Contact</h4>
                <p><i className="bi bi-telephone"></i> +977-1-555-0123</p>
                <p><i className="bi bi-envelope"></i> ukg@helioschool.edu</p>
                <button onClick={() => setShowEnroll(true)} className="btn btn-primary w-100">Request Info</button>
              </div>

              <div className="sidebar-card testimonials">
                <h4>Parent Feedback</h4>
                <blockquote>"My child loves UKG — very friendly environment!" <cite>— Anonymous</cite></blockquote>
                <blockquote>"Strong academics. Amazing teachers!" <cite>— A. Sharma</cite></blockquote>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      {showEnroll && (
        <div className="modal-overlay" onClick={() => setShowEnroll(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4>Enroll in UKG</h4>
              <button onClick={() => setShowEnroll(false)} className="close-btn">×</button>
            </div>
            <form onSubmit={handleSubmit} className="enrollment-form">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
              <input name="childName" value={form.childName} onChange={handleChange} placeholder="Child's Name" required />
              <input name="age" value={form.age} onChange={handleChange} placeholder="Child's Age" required />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" />
              
              <div className="form-actions">
                <button type="submit" disabled={submitted} className="btn btn-primary w-100">
                  {submitted ? "Submitting..." : "Submit"}
                </button>
                <button type="button" onClick={() => setShowEnroll(false)} className="btn btn-secondary w-100 mt-3">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UKGContent;
