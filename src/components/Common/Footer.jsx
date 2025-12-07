import React from "react";
import { Link } from "react-router-dom";
import '../../styles/common/footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Main Footer */}
      <footer className="footer-section">
        {/* Top Footer Section */}
        <div className="footer-top">
          <div className="container">
            <div className="row g-4">
              {/* School Information */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-brand mb-4">
                  <img 
                    src="/logo.png" 
                    width={60} 
                    alt="Helio Montessori School" 
                    className="footer-logo mb-3"
                  />
                  <h3 className="school-name">Helio Montessori School</h3>
                  <p className="school-tagline">Nurturing Young Minds, Illuminating Futures</p>
                  <p className="school-description">
                    A premier Montessori institution dedicated to providing holistic education 
                    that fosters independence, creativity, and lifelong learning in children.
                  </p>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li>
                    <Link to="/about">
                      <i className="bi bi-chevron-right me-2"></i>About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs">
                      <i className="bi bi-chevron-right me-2"></i>Programs
                    </Link>
                  </li>
                  <li>
                    <Link to="/facilities">
                      <i className="bi bi-chevron-right me-2"></i>Facilities
                    </Link>
                  </li>
                  <li>
                    <Link to="/admissions">
                      <i className="bi bi-chevron-right me-2"></i>Admissions
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonials">
                      <i className="bi bi-chevron-right me-2"></i>Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="bi bi-chevron-right me-2"></i>Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Programs */}
              <div className="col-lg-3 col-md-6">
                <h4 className="footer-heading">Our Programs</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      <i className="bi bi-balloon me-2"></i>Playgroup (1.5-2.5 yrs)
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-book me-2"></i>Nursery (2.5-3.5 yrs)
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-pencil me-2"></i>LKG (3.5-4.5 yrs)
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-eraser me-2"></i>UKG (4.5-5.5 yrs)
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-stars me-2"></i>Extended Day Care
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-palette me-2"></i>Extra Curricular
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-lg-3 col-md-6">
                <h4 className="footer-heading">Contact Info</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <div>
                      <h5>Main Campus</h5>
                      <p>123 Education Street,<br />Knowledge City, ABC 12345</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <div>
                      <h5>Phone Numbers</h5>
                      <p>Admissions: +1 (234) 567-8901<br />
                         General: +1 (234) 567-8902</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <div>
                      <h5>Email Address</h5>
                      <p>admissions@heliomontessori.edu<br />
                         info@heliomontessori.edu</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-clock"></i>
                    <div>
                      <h5>School Hours</h5>
                      <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                         Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Footer Section */}
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="newsletter">
                  <h4>Subscribe to Our Newsletter</h4>
                  <p>Get updates on school events, educational tips, and admissions information.</p>
                  <form className="newsletter-form">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="newsletter-input"
                    />
                    <button type="submit" className="newsletter-btn">
                      <i className="bi bi-send"></i> Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-certifications">
                  <h4>Accreditations</h4>
                  <div className="certification-logos">
                    <div className="cert-logo">
                      <i className="bi bi-award"></i>
                      <span>Montessori<br />Certified</span>
                    </div>
                    <div className="cert-logo">
                      <i className="bi bi-shield-check"></i>
                      <span>ISO<br />9001:2015</span>
                    </div>
                    <div className="cert-logo">
                      <i className="bi bi-star"></i>
                      <span>Best Preschool<br />2023 Award</span>
                    </div>
                    <div className="cert-logo">
                      <i className="bi bi-heart"></i>
                      <span>Child-Safe<br />Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="copyright">
                  © {currentYear} Helio Montessori School. All rights reserved.
                </p>
              </div>
              <div className="col-md-6">
                <div className="footer-bottom-links">
                  <a href="/privacy-policy">Privacy Policy</a>
                  <a href="/terms">Terms of Service</a>
                  <a href="/sitemap">Sitemap</a>
                  <a href="/careers">Careers</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;