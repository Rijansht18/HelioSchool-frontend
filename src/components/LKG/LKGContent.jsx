import React, { useState } from "react";
import "../../styles/LKG/LKGContent.css";

const LKGContent = () => {
  const [showEnroll, setShowEnroll] = useState(false);
  const [form, setForm] = useState({ name: "", childName: "", age: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const teachers = [
    { name: "Ms. Riya Karki", role: "LKG Teacher", bio: "Passionate early-years educator who loves stories, songs and gentle discovery.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" },
    { name: "Mr. Suman Rai", role: "Assistant", bio: "Play-based learning advocate who focuses on motor skills and social play.", img: "https://images.unsplash.com/photo-1598214886806-c87b84b7078a?q=80&w=800&auto=format&fit=crop" }
  ];

  const curriculum = [
    { title: "Phonics & Reading Readiness", desc: "Letter-sound activities, rhymes, and simple blending.", icon: "bi-alphabet" },
    { title: "Numbers & Pattern Play", desc: "Counting games, shapes, sorting and pattern recognition.", icon: "bi-grid-3x3" },
    { title: "Creative Expression", desc: "Drawing, clay, music, movement and role-play.", icon: "bi-brush" },
    { title: "Social & Emotional Growth", desc: "Sharing, listening, routines and confidence-building.", icon: "bi-heart" }
  ];

  const schedule = [
    { time: "08:45 AM", activity: "Arrival & Free Play" },
    { time: "09:15 AM", activity: "Circle Time (Phonics & Songs)" },
    { time: "09:45 AM", activity: "Activity Rotations (Math / Art / Motor)" },
    { time: "10:45 AM", activity: "Snack & Outdoor Play" },
    { time: "11:15 AM", activity: "Storytime & Reflection" },
    { time: "11:45 AM", activity: "Home Time" }
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
    }, 800);
  }

  return (
    <div className="lkg-content">
      {/* Floating Decorative Icons */}
      <div className="floating-decorations">
        <span className="float-deco deco-1">📘</span>
        <span className="float-deco deco-2">🧸</span>
      </div>

      <div className="container">
        {/* Hero Section */}
        <div className="row hero-section">
          <div className="col-lg-7 hero-text">
            <div className="badge-tag">Ages 4-5 Years</div>
            <h1>Little steps to big learning</h1>
            <p>Our LKG program introduces structured early literacy, numeracy and social routines in a playful, nurturing environment.</p>
            
            <div className="hero-buttons">
              <button onClick={() => setShowEnroll(true)} className="btn btn-primary">Book a Tour</button>
              <a href="#gallery" className="btn btn-outline">See Gallery</a>
            </div>

            <div className="info-cards">
              <div className="info-card">
                <i className="bi bi-puzzle"></i>
                <h4>Structured Play</h4>
                <p>Purposeful games that teach skills while children play</p>
              </div>
              <div className="info-card">
                <i className="bi bi-calendar-check"></i>
                <h4>Learning Routines</h4>
                <p>Daily schedules that build independence and comfort</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 hero-image">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop" alt="lkg kids" />
              <div className="image-caption">
                <p>Bright classrooms that encourage discovery, reading corners and activity stations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="row content-grid">
          {/* Left Column - Curriculum */}
          <div className="col-lg-8">
            <section id="curriculum" className="curriculum-section">
              <h2>Curriculum</h2>
              <p className="section-subtitle">A balanced approach to early literacy, numeracy and socio-emotional learning.</p>
              
              <div className="curriculum-grid">
                {curriculum.map((c, i) => (
                  <div key={i} className="curriculum-card" style={{ animationDelay: `${i * 0.15}s` }}>
                    <i className={`bi ${c.icon}`}></i>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Teachers Section */}
            <section id="teachers" className="teachers-section">
              <h2>Meet the Teachers</h2>
              <div className="teachers-grid">
                {teachers.map((t, i) => (
                  <div key={i} className="teacher-card" style={{ animationDelay: `${i * 0.12}s` }}>
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
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" alt="gallery1" className="gallery-img-1" />
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" alt="gallery2" className="gallery-img-2" />
                <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop" alt="gallery3" className="gallery-img-3" />
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-lg-4">
            <aside className="sidebar">
              <div className="sidebar-card quick-info">
                <h4>Quick Info</h4>
                <ul>
                  <li><i className="bi bi-calendar"></i> Age: 4 — 5 years</li>
                  <li><i className="bi bi-calendar-week"></i> Days: Mon — Fri</li>
                  <li><i className="bi bi-clock"></i> Hours: 8:45 AM — 11:45 AM</li>
                  <li><i className="bi bi-journal-check"></i> Includes: Worksheets, storytime, events</li>
                </ul>
              </div>

              <div id="schedule" className="sidebar-card schedule">
                <h4>Daily Schedule</h4>
                <div className="schedule-list">
                  {schedule.map((s, idx) => (
                    <div key={idx} className="schedule-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                      <span className="time">{s.time}</span>
                      <span className="activity">{s.activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card contact">
                <h4>Contact</h4>
                <p><i className="bi bi-telephone"></i> +977-1-555-0123</p>
                <p><i className="bi bi-envelope"></i> lkg@helioschool.edu</p>
                <button onClick={() => setShowEnroll(true)} className="btn btn-primary w-100">Request Info</button>
              </div>

              <div className="sidebar-card testimonials">
                <h4>Parent Feedback</h4>
                <blockquote>"My child loves the reading corner — wonderful progress!" <cite>— S. Gurung</cite></blockquote>
                <blockquote>"Warm teachers and great activities." <cite>— P. Lama</cite></blockquote>
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
              <h4>Enrollment Request — LKG</h4>
              <button onClick={() => setShowEnroll(false)} className="close-btn">×</button>
            </div>
            <form onSubmit={handleSubmit} className="enrollment-form">
              <div className="form-row">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Parent / Guardian name" required />
                <input name="childName" value={form.childName} onChange={handleChange} placeholder="Child's name" required />
              </div>
              <div className="form-row">
                <input name="age" value={form.age} onChange={handleChange} placeholder="Child's age" required />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
              </div>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Notes / allergies / preferred batch" />
              
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

export default LKGContent;
