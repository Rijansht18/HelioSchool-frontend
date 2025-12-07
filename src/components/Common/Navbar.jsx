import React, { useState, useEffect } from "react";
import '../../styles/common/navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm ${scrolled ? 'scrolled' : ''}`}">
        <div className="container-fluid px-4 px-lg-5">
          <a className="navbar-brand" href="/">
            <img src="/logo.png" width={50} alt="logo" className="brand-logo" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Desktop Menu */}
          <div
            className="collapse navbar-collapse d-none d-lg-block"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              {/* About Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownHover("about")}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  className="nav-link dropdown-toggle no-dropdown-arrow"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={activeDropdown === "about" ? "true" : "false"}
                >
                  About
                </a>
                <ul
                  className={`dropdown-menu ${
                    activeDropdown === "about" ? "show" : ""
                  }`}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-info-circle me-2"></i>About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-chat-text me-2"></i>Principal's
                      Message
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-people me-2"></i>Team
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle no-dropdown-arrow"
                      href="#"
                    >
                      <i className="bi bi-handshake me-2"></i>Our Partners
                    </a>
                    <ul className="dropdown-menu dropdown-submenu-content">
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-award me-2"></i>Academic Partners
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-briefcase me-2"></i>Corporate
                          Partners
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-heart me-2"></i>Community Partners
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Programs Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownHover("programs")}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  className="nav-link dropdown-toggle no-dropdown-arrow"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={
                    activeDropdown === "programs" ? "true" : "false"
                  }
                >
                  Programs
                </a>
                <ul
                  className={`dropdown-menu ${
                    activeDropdown === "programs" ? "show" : ""
                  }`}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-balloon me-2"></i>Playgroup
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-book me-2"></i>Nursery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-pencil me-2"></i>LKG
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-eraser me-2"></i>UKG
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-journal-text me-2"></i>Curriculum
                    </a>
                  </li>
                </ul>
              </li>

              {/* Facilities Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownHover("facilities")}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  className="nav-link dropdown-toggle no-dropdown-arrow"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={
                    activeDropdown === "facilities" ? "true" : "false"
                  }
                >
                  Facilities
                </a>
                <ul
                  className={`dropdown-menu ${
                    activeDropdown === "facilities" ? "show" : ""
                  }`}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-house-door me-2"></i>Classroom
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-egg-fried me-2"></i>Dining
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-tree me-2"></i>Play Ground
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-bus-front me-2"></i>Transportation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-shield-check me-2"></i>Safety and
                      Security
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-heart-pulse me-2"></i>Medical
                    </a>
                  </li>
                </ul>
              </li>

              {/* Legacy Link */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Legacy
                </a>
              </li>

              {/* Admission Button - Desktop */}
              <li className="nav-item ms-lg-2">
                <a className="btn btn-primary admission-btn" href="#">
                  <i className="bi bi-door-open me-2"></i>Admission
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop Sidebar Toggle Button */}
          <button
            className="sidebar-toggle-btn d-none d-lg-flex"
            type="button"
            onClick={toggleSidebar}
            aria-label="Open sidebar menu"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      ></div>
      {/* Mobile Menu Sidebar (From Right) */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <img src="/logo.png" width={40} alt="logo" className="me-3" />
            <h5>Menu</h5>
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          ></button>
        </div>
        <div className="mobile-menu-body">
          <div className="mobile-menu-list">
            {/* About Dropdown Mobile */}
            <div className="mobile-menu-item">
              <button
                className="mobile-menu-link"
                data-bs-toggle="collapse"
                href="#mobileAbout"
                type="button"
              >
                <i className="bi bi-info-circle me-3"></i>
                <span>About</span>
                <i className="bi bi-chevron-down mobile-dropdown-icon"></i>
              </button>
              <div className="collapse" id="mobileAbout">
                <div className="mobile-dropdown-content">
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-info-circle me-3"></i>About Us
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-chat-text me-3"></i>Principal's Message
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-people me-3"></i>Team
                  </a>

                  {/* Partners Submenu */}
                  <div className="mobile-submenu-item">
                    <button
                      className="mobile-submenu-link"
                      data-bs-toggle="collapse"
                      href="#mobilePartners"
                      type="button"
                    >
                      <i className="bi bi-handshake me-3"></i>
                      <span>Our Partners</span>
                      <i className="bi bi-chevron-down mobile-subdropdown-icon"></i>
                    </button>
                    <div className="collapse" id="mobilePartners">
                      <div className="mobile-subdropdown-content">
                        <a
                          className="mobile-subdropdown-item"
                          href="#"
                          onClick={closeMobileMenu}
                        >
                          <i className="bi bi-award me-4"></i>Academic Partners
                        </a>
                        <a
                          className="mobile-subdropdown-item"
                          href="#"
                          onClick={closeMobileMenu}
                        >
                          <i className="bi bi-briefcase me-4"></i>Corporate
                          Partners
                        </a>
                        <a
                          className="mobile-subdropdown-item"
                          href="#"
                          onClick={closeMobileMenu}
                        >
                          <i className="bi bi-heart me-4"></i>Community Partners
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs Dropdown Mobile */}
            <div className="mobile-menu-item">
              <button
                className="mobile-menu-link"
                data-bs-toggle="collapse"
                href="#mobilePrograms"
                type="button"
              >
                <i className="bi bi-book me-3"></i>
                <span>Programs</span>
                <i className="bi bi-chevron-down mobile-dropdown-icon"></i>
              </button>
              <div className="collapse" id="mobilePrograms">
                <div className="mobile-dropdown-content">
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-balloon me-3"></i>Playgroup
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-book me-3"></i>Nursery
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-pencil me-3"></i>LKG
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-eraser me-3"></i>UKG
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-journal-text me-3"></i>Curriculum
                  </a>
                </div>
              </div>
            </div>

            {/* Facilities Dropdown Mobile */}
            <div className="mobile-menu-item">
              <button
                className="mobile-menu-link"
                data-bs-toggle="collapse"
                href="#mobileFacilities"
                type="button"
              >
                <i className="bi bi-building me-3"></i>
                <span>Facilities</span>
                <i className="bi bi-chevron-down mobile-dropdown-icon"></i>
              </button>
              <div className="collapse" id="mobileFacilities">
                <div className="mobile-dropdown-content">
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-house-door me-3"></i>Classroom
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-egg-fried me-3"></i>Dining
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-tree me-3"></i>Play Ground
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-bus-front me-3"></i>Transportation
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-shield-check me-3"></i>Safety and
                    Security
                  </a>
                  <a
                    className="mobile-dropdown-item"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-heart-pulse me-3"></i>Medical
                  </a>
                </div>
              </div>
            </div>

            {/* Other Links */}
            <a className="mobile-menu-item" href="#" onClick={closeMobileMenu}>
              <div className="mobile-menu-link">
                <i className="bi bi-award me-3"></i>
                <span>Legacy</span>
              </div>
            </a>

            <a className="mobile-menu-item" href="#" onClick={closeMobileMenu}>
              <div className="mobile-menu-link">
                <i className="bi bi-chat-heart me-3"></i>
                <span>Parents Testimonials</span>
              </div>
            </a>

            <a className="mobile-menu-item" href="#" onClick={closeMobileMenu}>
              <div className="mobile-menu-link">
                <i className="bi bi-question-circle me-3"></i>
                <span>FAQ</span>
              </div>
            </a>

            <a className="mobile-menu-item" href="#" onClick={closeMobileMenu}>
              <div className="mobile-menu-link">
                <i className="bi bi-envelope me-3"></i>
                <span>Enquiry</span>
              </div>
            </a>

            {/* Admission Button Mobile */}
            <div className="mobile-menu-item mt-4">
              <a
                className="btn btn-primary w-100 admission-btn"
                href="#"
                onClick={closeMobileMenu}
              >
                <i className="bi bi-door-open me-2"></i>Admission
              </a>
            </div>
          </div>
        </div>
        <div className="mobile-menu-footer">
          <div className="contact-info">
            <p className="mb-1">
              <i className="bi bi-telephone me-2"></i>+1 (234) 567-8900
            </p>
            <p className="mb-0">
              <i className="bi bi-envelope me-2"></i>info@brightkids.com
            </p>
          </div>
        </div>
      </div>
      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>
      {/* Sidebar Menu (Desktop Quick Links) */}
      <div className={`sidebar-menu ${sidebarOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src="/logo.png" width={40} alt="logo" className="me-3" />
            <h5>Quick Links</h5>
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          ></button>
        </div>
        <div className="sidebar-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={closeSidebar}>
                <i className="bi bi-chat-heart me-3"></i>Parents Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={closeSidebar}>
                <i className="bi bi-question-circle me-3"></i>FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={closeSidebar}>
                <i className="bi bi-envelope me-3"></i>Enquiry
              </a>
            </li>
            <li className="nav-item mt-4">
              <a
                className="btn btn-primary w-100"
                href="#"
                onClick={closeSidebar}
              >
                <i className="bi bi-telephone me-2"></i>Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <div className="contact-info">
            <p className="mb-1">
              <i className="bi bi-telephone me-2"></i>+1 (234) 567-8900
            </p>
            <p className="mb-0">
              <i className="bi bi-envelope me-2"></i>info@brightkids.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
