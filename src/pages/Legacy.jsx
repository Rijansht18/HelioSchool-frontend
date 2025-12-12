import React, { useEffect, useState } from "react"

export default function Legacy() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const timelineEvents = [
    {
      year: "2067 B.S.",
      title: "Founded",
      description: "Helio School established as a small early-childhood learning center with a clear vision to create a warm, safe, and stimulating environment.",
      icon: "🏫"
    },
    {
      year: "Present",
      title: "500+ Graduates",
      description: "Successfully graduated over 500 students who have excelled academically and socially in higher institutions.",
      icon: "🎓"
    },
    {
      year: "Today",
      title: "Playgroup to LKG",
      description: "Offers comprehensive classes from Playgroup up to LKG with a team of caring and trained educators.",
      icon: "📚"
    },
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)',
      animation: isVisible ? 'fadeIn 0.8s ease-out' : 'none'
    }}>
      {/* Header Section */}
      <div style={{ 
        padding: '80px 20px', 
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 1s ease'
      }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginBottom: '24px', 
          padding: '8px 16px', 
          background: 'rgba(14, 165, 233, 0.1)', 
          borderRadius: '50px', 
          border: '1px solid rgba(14, 165, 233, 0.2)',
          animation: isVisible ? 'scaleIn 0.6s ease-out 0.2s both' : 'none'
        }}>
          <span style={{ fontSize: '1.5rem' }}>🏛️</span>
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#0284c7' }}>OUR HERITAGE</span>
        </div>

        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '800', 
          color: '#0f172a', 
          marginBottom: '24px', 
          lineHeight: '1.1',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s ease 0.3s'
        }}>
          Our <span style={{ 
            background: 'linear-gradient(90deg, #0284c7 0%, #0ea5e9 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>Legacy</span>
        </h1>

        <p style={{ 
          fontSize: '1.125rem', 
          color: '#64748b', 
          maxWidth: '600px', 
          margin: '0 auto 40px', 
          lineHeight: '1.7',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s ease 0.4s'
        }}>
          A journey of excellence in early childhood education since 2067 B.S.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 60px' }}>
        {/* Content Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '2rem', 
          marginBottom: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease 0.6s'
        }}>
          <div style={{ 
            background: 'white', 
            borderRadius: '20px', 
            padding: '2rem', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', 
            borderLeft: '4px solid #0284c7',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)'
            e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>A Journey of Growth</h2>
            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
              Established in 2067 B.S., Helio School has grown from a small early-childhood learning center into one of
              the most trusted foundational schools in Gatthaghar, Madhyapur Thimi. From the beginning, the school was
              founded with a clear vision—to create a warm, safe, and stimulating environment where young children can
              explore, learn, and develop essential life skills.
            </p>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Over the years, Helio School has remained dedicated to providing quality early education rooted in love,
              care, and strong educational principles.
            </p>
          </div>

          <div style={{ 
            background: 'white', 
            borderRadius: '20px', 
            padding: '2rem', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', 
            borderLeft: '4px solid #0ea5e9',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)'
            e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>Our Achievements</h2>
            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Throughout its journey, the school has proudly graduated more than 500 students, many of whom have gone on
              to excel academically and socially in higher institutions.
            </p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '1rem', 
              background: 'rgba(14, 165, 233, 0.1)', 
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0284c7' }}>500+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Students graduated and thriving in higher education</div>
            </div>
          </div>
        </div>

        {/* Cultural Values Section */}
        <div style={{ 
          background: 'linear-gradient(to right, rgba(14, 165, 233, 0.1), rgba(16, 185, 129, 0.1))', 
          borderRadius: '20px', 
          padding: '3rem 2rem', 
          marginBottom: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease 0.8s'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>Cultural Integration & Values</h2>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6', marginBottom: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Helio School integrates Nepali culture, values, and traditions into daily learning, ensuring that children
            grow with a sense of identity, respect, and belonging.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🎭', title: 'Cultural Programs', desc: 'Regular celebrations of Nepali culture and traditions' },
              { icon: '🏛️', title: 'Heritage Values', desc: 'Building identity, respect, and sense of belonging' },
              { icon: '👥', title: 'Community Events', desc: 'Joyful and meaningful connections with the community' }
            ].map((item, index) => (
              <div key={index} style={{ 
                background: 'white', 
                borderRadius: '12px', 
                padding: '1.5rem', 
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)', 
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${1 + index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.02)'
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div style={{ 
          marginBottom: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease 1.2s'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', textAlign: 'center', marginBottom: '3rem' }}>Timeline</h2>
          <div style={{ position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              width: '4px', 
              height: '100%', 
              background: 'linear-gradient(to bottom, #0284c7, #0ea5e9)', 
              borderRadius: '2px' 
            }}></div>
            {timelineEvents.map((event, index) => (
              <div key={index} style={{ 
                position: 'relative', 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: index !== timelineEvents.length - 1 ? '4rem' : '0',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}>
                <div style={{ 
                  width: '50%', 
                  padding: index % 2 === 0 ? '0 3rem 0 0' : '0 0 0 3rem',
                  textAlign: index % 2 === 0 ? 'right' : 'left'
                }}>
                  <div style={{ 
                    background: 'white', 
                    borderRadius: '16px', 
                    padding: '2rem', 
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '-30px' : '30px'})`,
                    transitionDelay: `${1.4 + index * 0.2}s`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateX(0) scale(1.02)'
                    e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateX(0) scale(1)'
                    e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{event.icon}</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0284c7', marginBottom: '0.5rem' }}>{event.year}</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>{event.title}</h3>
                    <p style={{ color: '#64748b', lineHeight: '1.6' }}>{event.description}</p>
                  </div>
                </div>
                <div style={{ 
                  position: 'absolute', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #0284c7, #0ea5e9)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontWeight: '700', 
                  fontSize: '1.25rem',
                  boxShadow: '0 8px 20px rgba(2, 132, 199, 0.4)',
                  zIndex: 10
                }}>
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #0284c7, #0ea5e9)', 
          borderRadius: '20px', 
          padding: '3rem 2rem', 
          textAlign: 'center', 
          color: 'white',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease 1.8s'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🚀</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Our Vision for the Future</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', opacity: '0.9' }}>
            Today, Helio School offers classes from Playgroup up to LKG, providing a strong foundational stage for early
            learners. With a team of caring and trained educators, the school focuses on experiential learning,
            creativity, communication, and character building. As we continue to evolve, we remain committed to shaping confident, curious, and compassionate
            young learners ready for future academic challenges.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}