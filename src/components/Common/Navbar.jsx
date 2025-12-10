import React, { useState, useEffect, useRef } from "react";
import '../../styles/Common/navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);

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
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    // Set a timeout before closing to allow clicking
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay
  };

  const handleDropdownItemClick = () => {
    // Clear timeout and close dropdown immediately when item is clicked
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light shadow-sm ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" width={50} alt="logo" className="brand-logo" />
          </Link>

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
                <Link
                  className="nav-link dropdown-toggle no-dropdown-arrow"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={activeDropdown === "about" ? "true" : "false"}
                >
                  About
                </Link>
                <ul
                  className={`dropdown-menu ${
                    activeDropdown === "about" ? "show" : ""
                  }`}
                  onMouseEnter={() => handleDropdownHover("about")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <li>
                    <Link className="dropdown-item" to="/about" onClick={handleDropdownItemClick}>
                      <i className="bi bi-info-circle me-2"></i>About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/principal" onClick={handleDropdownItemClick}>
                      <i className="bi bi-chat-text me-2"></i>Principal's
                      Message
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/team" onClick={handleDropdownItemClick}>
                      <i className="bi bi-people me-2"></i>Team
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-submenu">
                    <Link
                      className="dropdown-item dropdown-toggle no-dropdown-arrow"
                      to="#"
                    >
                      <i className="bi bi-handshake me-2"></i>Our Partners
                    </Link>
                    <ul className="dropdown-menu dropdown-submenu-content">
                      <li>
                        <Link className="dropdown-item" to="#" onClick={handleDropdownItemClick}>
                          <i className="bi bi-award me-2"></i>Academic Partners
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={handleDropdownItemClick}>
                          <i className="bi bi-briefcase me-2"></i>Corporate
                          Partners
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={handleDropdownItemClick}>
                          <i className="bi bi-heart me-2"></i>Community Partners
                        </Link>
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
                <Link
                  className="nav-link dropdown-toggle no-dropdown-arrow"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={
                    activeDropdown === "programs" ? "true" : "false"
                  }
                >
                  Programs
                </Link>
                <ul
                  className={`dropdown-menu ${
                    activeDropdown === "programs" ? "show" : ""
                  }`}
                  onMouseEnter={() => handleDropdownHover("programs")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <li>
                    <Link className="dropdown-item" to="/playgroup" onClick={handleDropdownItemClick}>
                      <i className="bi bi-balloon me-2"></i>Playgroup
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/nursery" onClick={handleDropdownItemClick}>
                      <i className="bi bi-book me-2"></i>Nursery
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/lkg" onClick={handleDropdownItemClick}>
                      <i className="bi bi-pencil me-2"></i>LKG
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ukg" onClick={handleDropdownItemClick}>
                      <i className="bi bi-eraser me-2"></i>UKG
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/curriculum" onClick={handleDropdownItemClick}>
                      <i className="bi bi-journal-text me-2"></i>Curriculum
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Facilities Link */}
              <li className="nav-item">
                <Link className="nav-link" to="/facilities">
                  Facilities
                </Link>
              </li>

              {/* Legacy Link */}
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Legacy
                </Link>
              </li>

              {/* Admission Button - Desktop */}
              <li className="nav-item ms-lg-2">
                <Link className="btn btn-primary admission-btn" to="/admission">
                  <i className="bi bi-door-open me-2"></i>Admission
                </Link>
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
                  <Link
                    className="mobile-dropdown-item"
                    to="/about"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-info-circle me-3"></i>About Us
                  </Link>
                  <Link
                    className="mobile-dropdown-item"
                    to="/principal"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-chat-text me-3"></i>Principal's Message
                  </Link>
                  <Link
                    className="mobile-dropdown-item"
                    to="/team"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-people me-3"></i>Team
                  </Link>

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
                        <Link
                          className="mobile-subdropdown-item"
                          to="#"
                          onClick={closeMobileMenu}
                        >
                          <i className="bi bi-award me-4"></i>Academic Partners
                        </Link>
                        <Link
                          className="mobile-subdropdown-item"
                          to="#"
                          onClick={closeMobileMenu}
                        >
                          <i className="bi bi-briefcase me-4"></i>Corporate
                          Partners
                        </Link>
                        <Link
                          className="mobile-subdropdown-item"
                          to="#"
                          onClick={closeMobileMenu}
                        >
                          <i className="bi bi-heart me-4"></i>Community Partners
                        </Link>
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
                  <Link
                    className="mobile-dropdown-item"
                    to="/playgroup"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-balloon me-3"></i>Playgroup
                  </Link>
                  <Link
                    className="mobile-dropdown-item"
                    to="/nursery"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-book me-3"></i>Nursery
                  </Link>
                  <Link
                    className="mobile-dropdown-item"
                    to="/lkg"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-pencil me-3"></i>LKG
                  </Link>
                  <Link
                    className="mobile-dropdown-item"
                    to="/ukg"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-eraser me-3"></i>UKG
                  </Link>
                  <Link
                    className="mobile-dropdown-item"
                    to="/curriculum"
                    onClick={closeMobileMenu}
                  >
                    <i className="bi bi-journal-text me-3"></i>Curriculum
                  </Link>
                </div>
              </div>
            </div>

            {/* Facilities Link Mobile */}
            <Link className="mobile-menu-item" to="/facilities" onClick={closeMobileMenu}>
              <div className="mobile-menu-link">
                <i className="bi bi-building me-3"></i>
                <span>Facilities</span>
              </div>
            </Link>

            {/* Other Links */}
            <Link className="mobile-menu-item" to="#" onClick={closeMobileMenu}>
              <div className="mobile-menu-link">
                <i className="bi bi-award me-3"></i>
                <span>Legacy</span>
              </div>
            </Link>

            <Link className="mobile-menu-item" to="#" onClick={closeMobileMenu}>
              <div className="mobile-menu-link">
                <i className="bi bi-chat-heart me-3"></i>
                <span>Parents Testimonials</span>
              </div>
            </Link>

            <Link className="mobile-menu-item" to="#" onClick={closeMobileMenu}>
              <div className="mobile-menu-link">
                <i className="bi bi-question-circle me-3"></i>
                <span>FAQ</span>
              </div>
            </Link>

            <Link className="mobile-menu-item" to="#" onClick={closeMobileMenu}>
              <div className="mobile-menu-link">
                <i className="bi bi-envelope me-3"></i>
                <span>Enquiry</span>
              </div>
            </Link>

            {/* Admission Button Mobile */}
            <div className="mobile-menu-item mt-4">
              <Link
                className="btn btn-primary w-100 admission-btn"
                to="/admission"
                onClick={closeMobileMenu}
              >
                <i className="bi bi-door-open me-2"></i>Admission
              </Link>
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
              <Link className="nav-link" to="#" onClick={closeSidebar}>
                <i className="bi bi-chat-heart me-3"></i>Parents Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={closeSidebar}>
                <i className="bi bi-question-circle me-3"></i>FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={closeSidebar}>
                <i className="bi bi-envelope me-3"></i>Enquiry
              </Link>
            </li>
            <li className="nav-item mt-4">
              <Link
                className="btn btn-primary w-100"
                to="#"
                onClick={closeSidebar}
              >
                <i className="bi bi-telephone me-2"></i>Contact Us
              </Link>
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