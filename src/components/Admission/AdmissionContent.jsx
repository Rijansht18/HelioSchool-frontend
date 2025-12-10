import React, { useState, useEffect } from "react";
import "../../styles/Admission/AdmissionContent.css";

const AdmissionContent = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
    previousSchool: "",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const grades = ["Playgroup", "Nursery", "LKG", "UKG"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        studentName: "",
        dateOfBirth: "",
        grade: "",
        parentName: "",
        email: "",
        phone: "",
        address: "",
        previousSchool: "",
        notes: ""
      });
      alert("Application submitted successfully! We will contact you soon.");
    }, 1000);
  };

  return (
    <div className="admission-content">
      <div className="container">
        {/* Header Section */}
        <div className="admission-header">
          <div className="floating-shapes">
            <div className="shape shape-1">📚</div>
            <div className="shape shape-2">🎨</div>
            <div className="shape shape-3">⭐</div>
            <div className="shape shape-4">🌟</div>
          </div>
          <div className={`header-content ${isVisible ? 'animate-in' : ''}`}>
            <div className="header-badge">
              <span className="badge-emoji">🎓</span>
              <span className="badge-text">Admission Open</span>
            </div>
            <h1 className="main-title">
              Apply for
              <span className="title-gradient">Admission</span>
            </h1>
            <p className="main-description">
              Take the first step towards your child's bright future. Fill out our admission form and join our learning community.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="row content-section">
          {/* Left Column - Form */}
          <div className="col-lg-8">
            <div className={`admission-form-card ${isVisible ? 'slide-in-left' : ''}`}>
              <div className="form-header">
                <div className="form-icon">📝</div>
                <div>
                  <h2>Admission Application Form</h2>
                  <p className="form-subtitle">Please fill in all required information</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="admission-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Student Name *</label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Enter student's full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Grade Applying For *</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Grade</option>
                      {grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Parent/Guardian Name *</label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter parent's full name"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter complete address"
                    rows="3"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Previous School (if any)</label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    placeholder="Enter previous school name"
                  />
                </div>

                <div className="form-group">
                  <label>Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any additional information or special requirements"
                    rows="4"
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={submitted}
                >
                  {submitted ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="col-lg-4">
            <div className={`admission-info ${isVisible ? 'slide-in-right' : ''}`}>
              <div className="info-card process-card">
                <div className="card-header">
                  <div className="card-icon">📋</div>
                  <h3>Admission Process</h3>
                </div>
                <ul>
                  <li>Submit online application</li>
                  <li>Document verification</li>
                  <li>Parent-child interaction</li>
                  <li>Admission confirmation</li>
                </ul>
              </div>

              <div className="info-card documents-card">
                <div className="card-header">
                  <div className="card-icon">📄</div>
                  <h3>Required Documents</h3>
                </div>
                <ul>
                  <li>Birth certificate</li>
                  <li>Previous school records</li>
                  <li>Medical certificate</li>
                  <li>Passport size photos</li>
                  <li>Address proof</li>
                </ul>
              </div>

              <div className="info-card contact-card">
                <div className="card-header">
                  <div className="card-icon">📞</div>
                  <h3>Contact Information</h3>
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> +1 (234) 567-8900
                </div>
                <div className="contact-item">
                  <strong>Email:</strong> admissions@helioschool.edu
                </div>
                <div className="contact-item">
                  <strong>Office Hours:</strong> Mon-Fri, 9 AM - 5 PM
                </div>
              </div>

         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionContent;