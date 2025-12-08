import React from 'react'
import '../../styles/Common/HeroSection.css'

const HeroSection = ({ 
  title, 
  badgeText, 
  showBreadcrumb = true,
  breadcrumbItems = [{ label: 'Home', path: '/' }],
  backgroundImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  overlayOpacity = 0.5,
  className = "",
  height = "25vh" // 20vh, 25vh, or 30vh
}) => {
  return (
    <div className={`hero-section ${className}`} style={{ minHeight: height }}>
      {/* Background with online image */}
      <div className="hero-background">
        <div 
          className="hero-bg-image" 
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div 
          className="hero-overlay" 
          style={{ opacity: overlayOpacity }}
        />
      </div>
      
      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          {badgeText && (
            <div className="hero-badge">
              <i className="bi bi-star-fill"></i>
              <span>{badgeText}</span>
            </div>
          )}
          
          {/* Title */}
          <h1 className="hero-title">{title}</h1>
          
          {/* Breadcrumb */}
          {showBreadcrumb && breadcrumbItems.length > 0 && (
            <nav className="hero-breadcrumb" aria-label="breadcrumb">
              <div className="breadcrumb-trail">
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <div className="breadcrumb-separator">
                        <i className="bi bi-chevron-right"></i>
                      </div>
                    )}
                    {index === breadcrumbItems.length - 1 ? (
                      <div className="breadcrumb-item current">
                        <span>{item.label}</span>
                      </div>
                    ) : (
                      <a href={item.path} className="breadcrumb-item">
                        {item.icon && <i className={`bi ${item.icon}`}></i>}
                        <span>{item.label}</span>
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection