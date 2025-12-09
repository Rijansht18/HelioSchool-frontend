import React, { useState } from "react";
import "../../styles/Playgroup/PlaygroupContent.css";

const PlaygroupContent = () => {
  const [showEnroll, setShowEnroll] = useState(false);
  const [form, setForm] = useState({ name: "", childName: "", age: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const teachers = [
    { name: "Ms. Anaya", role: "Lead Teacher", bio: "Early childhood educator with 6 years of experience.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
    { name: "Mr. Ramesh", role: "Assistant", bio: "Kind, patient helper who loves storytelling.", img: "https://images.unsplash.com/photo-1545996124-1f14c6d6a7c8?q=80&w=800&auto=format&fit=crop" }
  ];

  const curriculum = [
    { title: "Circle Time", desc: "Songs, calendar, and social routine to start the day.", icon: "bi-circle" },
    { title: "Sensory Play", desc: "Hands-on activities to explore textures and cause-effect.", icon: "bi-hand-index" },
    { title: "Story & Language", desc: "Short stories and vocabulary-building games.", icon: "bi-book" },
    { title: "Creative Arts", desc: "Painting, simple crafts, and imaginative play.", icon: "bi-palette" },
  ];

  const schedule = [
    { time: "09:00 AM", activity: "Arrival & Free Play" },
    { time: "09:30 AM", activity: "Circle Time" },
    { time: "10:00 AM", activity: "Activity Rotations" },
    { time: "11:00 AM", activity: "Snack & Outdoor Play" },
    { time: "11:45 AM", activity: "Story & Goodbye" },
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
    <div className="playgroup-content">
      <div className="container">
        {/* Hero Section */}
        <div className="row hero-section">
          <div className="col-lg-7 hero-text">
            <div className="badge-tag">Ages 2-4 Years</div>
            <h1>Where curiosity meets caring</h1>
            <p>Our playgroup focuses on social skills, sensory-rich play, and early language development. Small groups ensure each child gets personal attention.</p>
            
            <div className="hero-buttons">
              <button onClick={() => setShowEnroll(true)} className="btn btn-primary">Book a Tour</button>
              <a href="#gallery" className="btn btn-outline">See Gallery</a>
            </div>

            <div className="info-cards">
              <div className="info-card">
                <i className="bi bi-people"></i>
                <h4>Small Groups</h4>
                <p>Max 10 children per session</p>
              </div>
              <div className="info-card">
                <i className="bi bi-clock"></i>
                <h4>Flexible Timings</h4>
                <p>Morning and afternoon batches</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 hero-image">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1547714504-3d9a16f4b0f9?q=80&w=1200&auto=format&fit=crop" alt="playgroup kids" />
              <div className="image-caption">
                <p>Our cozy classroom with soft corners, activity stations, and an outdoor play patch.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="row content-grid">
          {/* Left Column - Curriculum */}
          <div className="col-lg-8">
            <section id="curriculum" className="curriculum-section">
              <h2>Curriculum highlights</h2>
              <p className="section-subtitle">Holistic activities designed to spark curiosity and build foundational skills.</p>
              
              <div className="curriculum-grid">
                {curriculum.map((c, i) => (
                  <div key={i} className="curriculum-card">
                    <i className={`bi ${c.icon}`}></i>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Teachers Section */}
            <section id="teachers" className="teachers-section">
              <h2>Meet the teachers</h2>
              <div className="teachers-grid">
                {teachers.map((t, i) => (
                  <div key={i} className="teacher-card">
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
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" alt="gallery1" />
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" alt="gallery2" />
                <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop" alt="gallery3" />
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-lg-4">
            <aside className="sidebar">
              <div className="sidebar-card quick-info">
                <h4>Quick info</h4>
                <ul>
                  <li><i className="bi bi-calendar"></i> Age: 2 — 4 years</li>
                  <li><i className="bi bi-calendar-week"></i> Days: Mon — Fri</li>
                  <li><i className="bi bi-clock"></i> Hours: 9:00 AM — 12:00 PM</li>
                  <li><i className="bi bi-currency-dollar"></i> Fee: Flexible plans available</li>
                </ul>
              </div>

              <div id="schedule" className="sidebar-card schedule">
                <h4>Sample schedule</h4>
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
                <p><i className="bi bi-envelope"></i> hello@helioschool.edu</p>
                <button onClick={() => setShowEnroll(true)} className="btn btn-primary w-100">Request Info</button>
              </div>

              <div className="sidebar-card testimonials">
                <h4>Parent words</h4>
                <blockquote>"A warm environment — my child asks to go every morning!" <cite>— S. Gurung</cite></blockquote>
                <blockquote>"Great teachers and small groups." <cite>— P. Lama</cite></blockquote>
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

export default PlaygroupContent;
