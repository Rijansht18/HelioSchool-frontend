import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../../styles/home/HomeHero.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeHero = () => {
  const swiperRef = useRef(null);
  const indicatorsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [realActiveIndex, setRealActiveIndex] = useState(0);

  // Hero slider data - removed buttonText
  const heroSlides = [
    {
      id: 1,
      title: "THE BEST EDUCATION FOR YOUR CHILDREN",
      subtitle: "PERIOD 2026 - 2027",
      description: "SCHOOL ADMISSION",
      tagline: "Think | Do",
      image: "/images/hero/hero-1.jpg",
      overlayColor: "rgba(0, 0, 0, 0.4)"
    },
    {
      id: 2,
      title: "NURTURING YOUNG MINDS",
      subtitle: "EXCELLENCE IN EARLY EDUCATION",
      description: "PLAYGROUP TO UKG",
      tagline: "Think | Explore",
      image: "/images/hero/hero-2.jpg",
      overlayColor: "rgba(0, 30, 60, 0.5)"
    },
    {
      id: 3,
      title: "SAFE & MODERN FACILITIES",
      subtitle: "STATE-OF-THE-ART INFRASTRUCTURE",
      description: "FOR HOLISTIC DEVELOPMENT",
      tagline: "Think | Grow",
      image: "/images/hero/hero-3.jpg",
      overlayColor: "rgba(60, 0, 30, 0.5)"
    },
    {
      id: 4,
      title: "LEGACY OF EXCELLENCE",
      subtitle: "ESTABLISHED 1995",
      description: "25+ YEARS OF EDUCATIONAL EXCELLENCE",
      tagline: "Think | Achieve",
      image: "/images/hero/hero-4.jpg",
      overlayColor: "rgba(30, 60, 0, 0.5)"
    }
  ];

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);
    setRealActiveIndex(realIndex);
    
    // Scroll the active indicator into view
    setTimeout(() => {
      scrollActiveIndicatorIntoView(realIndex);
    }, 100);
  };

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
      scrollActiveIndicatorIntoView(index);
    }
  };

  const scrollActiveIndicatorIntoView = (index) => {
    if (indicatorsRef.current) {
      const indicatorsContainer = indicatorsRef.current;
      const activeIndicator = indicatorsContainer.children[index];
      
      if (activeIndicator) {
        // Calculate scroll position to center the active indicator
        const containerWidth = indicatorsContainer.clientWidth;
        const indicatorWidth = activeIndicator.offsetWidth;
        const indicatorLeft = activeIndicator.offsetLeft;
        const scrollLeft = indicatorLeft - (containerWidth / 2) + (indicatorWidth / 2);
        
        indicatorsContainer.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    // Initialize the real active index
    if (swiperRef.current && swiperRef.current.swiper) {
      setRealActiveIndex(swiperRef.current.swiper.realIndex);
    }
  }, []);

  return (
    <section className="home-hero">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
          bulletClass: 'hero-pagination-bullet',
          bulletActiveClass: 'hero-pagination-bullet-active',
        }}
        navigation={{
          nextEl: '.hero-swiper-button-next',
          prevEl: '.hero-swiper-button-prev',
        }}
        onSlideChange={handleSlideChange}
        onInit={(swiper) => {
          // Scroll to active indicator on init
          setTimeout(() => {
            scrollActiveIndicatorIntoView(swiper.realIndex);
          }, 300);
        }}
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="hero-slide"
              style={{
                backgroundImage: `linear-gradient(${slide.overlayColor}, ${slide.overlayColor}), url(${slide.image})`,
              }}
            >
              <div className="container">
                <div className="hero-content">
                  <div className="hero-tagline">
                    <span>{slide.tagline}</span>
                  </div>
                  <div className="hero-subtitle">
                    {slide.subtitle}
                  </div>
                  <h1 className="hero-title">
                    {slide.title}
                  </h1>
                  <div className="hero-description">
                    {slide.description}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="hero-navigation">
        <button className="hero-swiper-button-prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="hero-swiper-button-next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Slide Indicators with Red Buttons - Scrollable */}
      <div className="hero-slide-indicators" ref={indicatorsRef}>
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            className={`hero-slide-indicator ${realActiveIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="indicator-number">0{index + 1}</span>
            <span className="indicator-title">{slide.subtitle}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;