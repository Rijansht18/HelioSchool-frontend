import React, { useState } from "react";
import "../../styles/Nursery/NurseryContent.css";

const NurseryContent = () => {
  const [showEnroll, setShowEnroll] = useState(false);
  const [form, setForm] = useState({ name: "", childName: "", age: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const teachers = [
    { name: "Ms. Priya", role: "Nursery Teacher", bio: "Certified early childhood specialist with 5+ years of experience.", img: "https://images.unsplash.com/photo-1598214886806-c87b84b7078a?q=80&w=800&auto=format&fit=crop" },
    { name: "Ms. Sana", role: "Assistant Teacher", bio: "Loves music, art, and helping children learn through play.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" }
  ];

  const curriculum = [
    { title: "Pre-Writing Skills", desc: "Tracing, patterns, grip exercises, and fine motor development.", icon: "bi-pencil" },
    { title: "Early Math", desc: "Counting, shapes, comparisons, puzzles, and logical thinking.", icon: "bi-calculator" },
    { title: "Language Building", desc: "Phonics, storytelling, rhymes, and vocabulary activities.", icon: "bi-chat-dots" },
    { title: "Creative Arts & Music", desc: "Drawing, coloring, singing, dancing, and crafts.", icon: "bi-music-note-beamed" }
  ];

  const schedule = [
    { time: "09:00 AM", activity: "Welcome & Free Play" },
    { time: "09:30 AM", activity: "Circle Time & Rhymes" },
    { time: "10:00 AM", activity: "Activity Stations" },
    { time: "11:00 AM", activity: "Snack & Outdoor Play" },
    { time: "11:45 AM", activity: "Story & Wrap-up" }
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
      alert("Enrollment request submitted — we'll contact you soon!");
    }, 700);
  }

  return (
    <div className="nursery-content">
      {/* Floating Icons */}
      <div className="floating-icons">
        <span className="float-icon icon-1">🌈</span>
        <span className="float-icon icon-2">🌟</span>
        <span className="float-icon icon-3">🎈</span>
      </div>

      <div className="container">
        {/* Hero Section */}
        <div className="row hero-section">
          <div className="col-lg-7 hero-text">
            <div className="badge-tag">Ages 3-4.5 Years</div>
            <h1>Exploring, learning, and growing every day</h1>
            <p>Our nursery program helps children develop essential early learning skills through structured activities, guided play, and a warm classroom environment.</p>
            
            <div className="hero-buttons">
              <button onClick={() => setShowEnroll(true)} className="btn btn-primary">Book a Tour</button>
              <a href="#gallery" className="btn btn-outline">See Gallery</a>
            </div>

            <div className="info-cards">
              <div className="info-card">
                <i className="bi bi-lightbulb"></i>
                <h4>Skill-Based Learning</h4>
                <p>Strong foundation for pre-primary education</p>
              </div>
              <div className="info-card">
                <i className="bi bi-palette"></i>
                <h4>Activity-Rich Sessions</h4>
                <p>Music, art, craft & storytelling daily</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 hero-image">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop" alt="nursery kids" />
              <div className="image-caption">
                <p>Cheerful classrooms designed for creativity, learning, and exploration.</p>
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
              <p className="section-subtitle">Structured modules crafted to build confidence and early academic skills.</p>
              
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
                  <div key={i} className="teacher-card" style={{ animationDelay: `${i * 0.2}s` }}>
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
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" alt="gallery1" />
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" alt="gallery2" />
                <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop" alt="gallery3" />
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-lg-4">
            <aside className="sidebar">
              <div className="sidebar-card quick-info">
                <h4>Quick Info</h4>
                <ul>
                  <li><i className="bi bi-calendar"></i> Age: 3 — 4.5 years</li>
                  <li><i className="bi bi-calendar-week"></i> Days: Mon — Fri</li>
                  <li><i className="bi bi-clock"></i> Hours: 9:00 AM — 12:00 PM</li>
                  <li><i className="bi bi-journal-check"></i> Includes: Worksheets, activities, events</li>
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
                <p><i className="bi bi-envelope"></i> nursery@helioschool.edu</p>
                <button onClick={() => setShowEnroll(true)} className="btn btn-primary w-100">Request Info</button>
              </div>

              <div className="sidebar-card testimonials">
                <h4>Parent Feedback</h4>
                <blockquote>"My child learned so much — very interactive class!" <cite>— R. Thapa</cite></blockquote>
                <blockquote>"Amazing teachers and child-friendly environment." <cite>— B. Karki</cite></blockquote>
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
              <h4>Enrollment request</h4>
              <button onClick={() => setShowEnroll(false)} className="close-btn">×</button>
            </div>
            <form onSubmit={handleSubmit} className="enrollment-form">
              <div className="form-row">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                <input name="childName" value={form.childName} onChange={handleChange} placeholder="Child's name" required />
              </div>
              <div className="form-row">
                <input name="age" value={form.age} onChange={handleChange} placeholder="Child's age" required />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
              </div>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any notes or allergies" />
              
              <div className="form-actions">
                <button type="submit" disabled={submitted} className="btn btn-primary">
                  {submitted ? "Sending..." : "Submit Request"}
                </button>
                <button type="button" onClick={() => setForm({ name: "", childName: "", age: "", phone: "", message: "" })} className="btn btn-text">
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NurseryContent;
