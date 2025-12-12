import React, { useState, useEffect } from "react";
import "../../styles/Gallery/Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
      thumb: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300",
      title: "Classroom Learning",
      category: "Education"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      thumb: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300",
      title: "Science Lab",
      category: "Laboratory"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      thumb: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
      title: "Library",
      category: "Learning"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800",
      thumb: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300",
      title: "Art Class",
      category: "Creative"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800",
      thumb: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300",
      title: "Sports Activity",
      category: "Sports"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      thumb: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300",
      title: "Music Room",
      category: "Music"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
      thumb: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300",
      title: "Computer Lab",
      category: "Technology"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=800",
      thumb: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=300",
      title: "Playground",
      category: "Recreation"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  return (
    <div className="gallery-container">
      {/* Header */}
      <div className="gallery-header">
        <div className={`header-content ${isVisible ? 'animate-in' : ''}`}>
          <h1 className="gallery-title">
            School <span className="title-gradient">Gallery</span>
          </h1>
          <p className="gallery-description">
            Explore our vibrant school life through these beautiful moments
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-item ${isVisible ? 'fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openLightbox(image, index)}
          >
            <div className="image-wrapper">
              <img src={image.thumb} alt={image.title} />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>{image.title}</h3>
                  <span className="category">{image.category}</span>
                  <div className="view-icon">👁️</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="close-btn" onClick={closeLightbox}>
              ✕
            </button>

            {/* Navigation Arrows */}
            <button className="nav-btn prev-btn" onClick={prevImage}>
              ‹
            </button>
            <button className="nav-btn next-btn" onClick={nextImage}>
              ›
            </button>

            {/* Main Image */}
            <div className="main-image-container">
              <img src={selectedImage.src} alt={selectedImage.title} className="main-image" />
              <div className="image-info">
                <h3>{selectedImage.title}</h3>
                <span className="category-tag">{selectedImage.category}</span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="thumbnail-strip">
              <div className="thumbnail-container">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  >
                    <img src={image.thumb} alt={image.title} />
                  </div>
                ))}
              </div>
            </div>

            {/* Image Counter */}
            <div className="image-counter">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;