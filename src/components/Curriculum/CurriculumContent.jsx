import React, { useState } from "react";
import "../../styles/Curriculum/CurriculumContent.css";

const CurriculumContent = () => {
  const [activeClass, setActiveClass] = useState("playgroup");

  const classData = {
    playgroup: {
      title: "Playgroup Curriculum",
      subtitle: "Ages 2-3 Years",
      color: "amber",
      activities: [
        { icon: "🎨", title: "Sensory Play", desc: "Finger painting, water play, and texture exploration" },
        { icon: "🎵", title: "Music & Movement", desc: "Simple songs, dancing, and rhythm activities" },
        { icon: "🧸", title: "Free Play", desc: "Imaginative play with toys and building blocks" },
        { icon: "📚", title: "Story Time", desc: "Picture books and interactive storytelling" },
        { icon: "🏃", title: "Physical Play", desc: "Crawling, climbing, and basic motor skills" },
        { icon: "🍎", title: "Snack Time", desc: "Learning eating habits and social skills" }
      ]
    },
    nursery: {
      title: "Nursery Curriculum",
      subtitle: "Ages 3-4 Years",
      color: "emerald",
      activities: [
        { icon: "🔤", title: "Pre-Literacy", desc: "Letter recognition and phonics introduction" },
        { icon: "🔢", title: "Numbers & Counting", desc: "Basic counting and number recognition 1-10" },
        { icon: "🎨", title: "Creative Arts", desc: "Drawing, coloring, and simple craft projects" },
        { icon: "🌱", title: "Nature Study", desc: "Plants, animals, and weather observation" },
        { icon: "🤝", title: "Social Skills", desc: "Sharing, taking turns, and friendship building" },
        { icon: "🏃", title: "Gross Motor", desc: "Running, jumping, and playground activities" }
      ]
    },
    lkg: {
      title: "LKG Curriculum",
      subtitle: "Ages 4-5 Years",
      color: "blue",
      activities: [
        { icon: "📖", title: "Reading Readiness", desc: "Phonics, sight words, and simple sentences" },
        { icon: "✏️", title: "Writing Skills", desc: "Letter formation and pre-writing activities" },
        { icon: "🔢", title: "Mathematics", desc: "Counting to 20, shapes, and basic addition" },
        { icon: "🔬", title: "Science Exploration", desc: "Simple experiments and scientific thinking" },
        { icon: "🌍", title: "Social Studies", desc: "Community helpers and cultural awareness" },
        { icon: "🎭", title: "Drama & Role Play", desc: "Acting, storytelling, and creative expression" }
      ]
    },
    ukg: {
      title: "UKG Curriculum",
      subtitle: "Ages 5-6 Years",
      color: "indigo",
      activities: [
        { icon: "📚", title: "Advanced Reading", desc: "Fluent reading and comprehension skills" },
        { icon: "✍️", title: "Writing & Grammar", desc: "Sentence writing and basic grammar rules" },
        { icon: "🧮", title: "Advanced Math", desc: "Addition, subtraction, and problem solving" },
        { icon: "🔬", title: "Science Projects", desc: "Hands-on experiments and research skills" },
        { icon: "💻", title: "Computer Skills", desc: "Basic computer literacy and digital learning" },
        { icon: "🎯", title: "School Readiness", desc: "Preparation for primary school transition" }
      ]
    }
  };

  const currentClass = classData[activeClass];

  return (
    <div className={`curriculum-content ${currentClass.color}-theme`}>
      <div className="container">
        {/* Hero Section */}
        <div className="row hero-section">
          <div className="col-lg-7 hero-text">
            <div className="badge-tag">{currentClass.subtitle}</div>
            <h1>{currentClass.title}</h1>
            <p>Discover our comprehensive curriculum designed to nurture young minds through engaging, age-appropriate activities and structured learning experiences.</p>
            
            <div className="class-tabs">
              {Object.keys(classData).map((classKey) => (
                <button 
                  key={classKey}
                  onClick={() => setActiveClass(classKey)}
                  className={`class-tab ${activeClass === classKey ? 'active' : ''}`}
                >
                  {classKey.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-5 hero-image">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop" alt="curriculum" />
              <div className="floating-elements">
                <div className="floating-icon">📚</div>
                <div className="floating-icon">🎨</div>
                <div className="floating-icon">🔢</div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="row content-grid">
          <div className="col-12">
            <section className="activities-section">
              <h2>Learning Activities</h2>
              <p className="section-subtitle">Age-appropriate activities designed for holistic development</p>
              
              <div className="activities-grid">
                {currentClass.activities.map((activity, i) => (
                  <div key={i} className="activity-card">
                    <div className="activity-icon">{activity.icon}</div>
                    <h4>{activity.title}</h4>
                    <p>{activity.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Learning Approach */}
        <div className="row approach-section">
          <div className="col-12">
            <h2>Our Learning Approach</h2>
            <div className="approach-grid">
              <div className="approach-card">
                <div className="approach-icon">🎯</div>
                <h3>Play-Based Learning</h3>
                <p>Learning through fun, engaging activities</p>
              </div>
              <div className="approach-card">
                <div className="approach-icon">👥</div>
                <h3>Individual Attention</h3>
                <p>Personalized learning for each child</p>
              </div>
              <div className="approach-card">
                <div className="approach-icon">🌟</div>
                <h3>Holistic Development</h3>
                <p>Balanced cognitive and emotional growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumContent;