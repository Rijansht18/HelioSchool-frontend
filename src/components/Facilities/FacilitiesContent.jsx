import React, { useState } from "react";
import "../../styles/Facilities/FacilitiesContent.css";

const FacilitiesContent = () => {
  const [openToggle, setOpenToggle] = useState(null);

  const toggleSection = (index) => {
    setOpenToggle(openToggle === index ? null : index);
  };

  const facilities = [
    {
      title: "Meals & Nutrition",
      icon: "bi-egg-fried",
      content: (
        <>
          <p>The Helio School provides fresh, healthy, and well-balanced meals prepared daily under strict hygiene standards. Our nutritionists ensure meals support physical and cognitive development.</p>
          <p>Morning and afternoon snacks are served along with lunch. Food habits, table manners, and healthy eating routines are encouraged.</p>
          <p><strong>What We Offer</strong></p>
          <ul>
            <li>Nutritious multi-course meals developed with dieticians</li>
            <li>Special meal consideration for allergies</li>
            <li>Hands-on food learning activities</li>
            <li>Zero junk food policy</li>
          </ul>
        </>
      ),
    },
    {
      title: "Health & Safety",
      icon: "bi-shield-check",
      content: (
        <>
          <p>We maintain high safety standards to ensure children stay healthy, happy, and protected. Students undergo regular monthly medical check-ups by certified pediatricians.</p>
          <ul>
            <li>No child is left unsupervised, indoors or outdoors</li>
            <li>Contagious illness policy strictly followed</li>
            <li>Parents must update the school about allergies and health conditions</li>
            <li>Emergency contact information always accessible</li>
          </ul>
        </>
      ),
    },
    {
      title: "Medical Support",
      icon: "bi-heart-pulse",
      content: (
        <>
          <p>Medication must be handed directly to staff with proper labeling. Daily medication logs are maintained and require parental signatures.</p>
          <p>In case of fever, parents are immediately contacted. Emergency medical protocols are strictly followed, and action plans for asthma/allergies are safely stored.</p>
          <ul>
            <li>Trained staff for medication administration</li>
            <li>Detailed medication tracking system</li>
            <li>Emergency medical action plans on file</li>
          </ul>
        </>
      ),
    },
    {
      title: "Accident & First Aid",
      icon: "bi-bandaid",
      content: (
        <>
          <p>Every staff member is trained in First Aid. Minor injuries are treated immediately, and incident reports are shared with parents.</p>
          <p>In case of serious situations, children are taken to the nearest hospital and parents are contacted instantly.</p>
          <ul>
            <li>Certified First Aid trained staff</li>
            <li>Complete accident documentation</li>
            <li>24/7 emergency response protocol</li>
          </ul>
        </>
      ),
    },
    {
      title: "Hygiene & Sanitation",
      icon: "bi-droplet",
      content: (
        <>
          <p>We follow strict hygiene standards, including mandatory handwashing upon arrival and departure. Regular sanitization of all play areas and classrooms.</p>
          <p>Children with infectious diseases must stay home until fully well. Health information sheets are provided to parents.</p>
          <ul>
            <li>Daily deep cleaning protocols</li>
            <li>Hand hygiene education for children</li>
            <li>Infection control measures in place</li>
          </ul>
        </>
      ),
    },
    {
      title: "Child Immunization",
      icon: "bi-clipboard2-pulse",
      content: (
        <>
          <p>All children must follow the national immunization schedule unless medically exempt. Records are verified and updated regularly.</p>
          <p>Unimmunized children will be excluded during outbreaks for safety. Annual immunization updates are required.</p>
          <ul>
            <li>Immunization record verification</li>
            <li>Regular update reminders to parents</li>
            <li>Medical exemption documentation accepted</li>
          </ul>
        </>
      ),
    },
    {
      title: "Dental Care",
      icon: "bi-emoji-smile",
      content: (
        <>
          <p>We promote healthy dental habits with age-appropriate guidance. Sugary foods are minimized, and students are encouraged to drink water after meals.</p>
          <ul>
            <li>Dental hygiene education programs</li>
            <li>Low-sugar nutrition policy</li>
            <li>Regular dental health newsletters</li>
          </ul>
        </>
      ),
    },
    {
      title: "Play Area & Activity Zone",
      icon: "bi-tree",
      content: (
        <>
          <p>The school has a safe, age-appropriate indoor and outdoor play area designed to develop motor skills, creativity, teamwork, and confidence.</p>
          <ul>
            <li>Soft flooring for safety</li>
            <li>Outdoor slides, swings, bridges & tunnels</li>
            <li>Imaginative play corners</li>
            <li>Daily structured physical activities</li>
          </ul>
        </>
      ),
    },
    {
      title: "Library & Reading Corner",
      icon: "bi-book",
      content: (
        <>
          <p>Our cozy reading area helps children grow a love for books with age-appropriate stories, picture books, and early learning materials.</p>
          <ul>
            <li>Weekly storytelling sessions</li>
            <li>Creative reading activities</li>
            <li>Interactive books for early literacy</li>
            <li>Comfortable reading nooks</li>
          </ul>
        </>
      ),
    },
    {
      title: "Transportation Services",
      icon: "bi-bus-front",
      content: (
        <>
          <p>Safe, reliable, and comfortable transportation is available for children above 24 months. Trained attendants accompany all rides.</p>
          <ul>
            <li>Seatbelts mandatory for all children</li>
            <li>Real-time attendance on pickup/drop</li>
            <li>Fixed timing policy</li>
            <li>Strict behavioral safety rules</li>
            <li>GPS-tracked vehicles</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="facilities-section">
      <div className="container">
        <h2 className="section-title">Our Facilities</h2>

        <div className="row align-items-start">
          <div className="col-lg-6 mb-4">
            <div className="facilities-image-wrapper">
              <img
                src="https://preschool.millsberry.edu.np/wp-content/uploads/2024/02/day_care_img_10.jpg"
                alt="Facilities"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="modern-accordion">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`accordion-card ${openToggle === index ? "open" : ""}`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="header-content">
                      <i className={`bi ${facility.icon} facility-icon`}></i>
                      <h5>{facility.title}</h5>
                    </div>
                    <i className={`bi bi-chevron-${openToggle === index ? "up" : "down"} rotate-icon`}></i>
                  </div>

                  <div className={`accordion-body ${openToggle === index ? "show" : ""}`}>
                    {facility.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="enroll-button-wrapper">
              <button className="btn btn-primary btn-lg">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesContent;
