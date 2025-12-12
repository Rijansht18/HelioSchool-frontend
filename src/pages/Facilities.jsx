import FacilityCard from "../components/Facilities/FacilityCard"
import "../styles/Facilities/FacilitiesContent.css"

export default function Facilities() {
  const facilitiesData = [
    {
      id: 1,
      iconType: "meals",
      title: "Meals & Nutrition",
      description:
        "Fresh, healthy, and well-balanced meals prepared daily under strict hygiene standards with nutritionist-approved menus.",
      features: [
        "Nutritious multi-course meals developed with dieticians",
        "Special meal consideration for allergies",
        "Hands-on food learning activities",
        "Zero junk food policy",
      ],
    },
    {
      id: 2,
      iconType: "safety",
      title: "Health & Safety",
      description:
        "High safety standards with regular medical check-ups by certified pediatricians to ensure children stay healthy and protected.",
      features: [
        "No child is left unsupervised, indoors or outdoors",
        "Contagious illness policy strictly followed",
        "Parents must update about allergies and health conditions",
        "Emergency contact information always accessible",
      ],
    },
    {
      id: 3,
      iconType: "medical",
      title: "Medical Support",
      description:
        "Professional medication management with trained staff and detailed tracking systems for all medical needs.",
      features: [
        "Trained staff for medication administration",
        "Detailed medication tracking system",
        "Emergency medical action plans on file",
        "Immediate parent contact for health issues",
      ],
    },
    {
      id: 4,
      iconType: "firstaid",
      title: "Accident & First Aid",
      description:
        "Every staff member is trained in First Aid with immediate response protocols and comprehensive documentation.",
      features: [
        "Certified First Aid trained staff",
        "Complete accident documentation",
        "24/7 emergency response protocol",
        "Direct hospital partnerships",
      ],
    },
    {
      id: 5,
      iconType: "hygiene",
      title: "Hygiene & Sanitation",
      description:
        "Strict hygiene standards with mandatory handwashing and regular sanitization of all areas and equipment.",
      features: [
        "Daily deep cleaning protocols",
        "Hand hygiene education for children",
        "Infection control measures in place",
        "Health information sheets for parents",
      ],
    },
    {
      id: 6,
      iconType: "vaccination",
      title: "Child Immunization",
      description:
        "Complete immunization tracking following national guidelines with regular updates and medical exemption support.",
      features: [
        "Immunization record verification",
        "Regular update reminders to parents",
        "Medical exemption documentation accepted",
        "Annual immunization updates required",
      ],
    },
    {
      id: 7,
      iconType: "dental",
      title: "Dental Care",
      description:
        "Comprehensive dental health programs with age-appropriate guidance and low-sugar nutrition policies.",
      features: [
        "Dental hygiene education programs",
        "Low-sugar nutrition policy",
        "Regular dental health newsletters",
        "Water encouraged after meals",
      ],
    },
    {
      id: 8,
      iconType: "play",
      title: "Play Area & Activity Zone",
      description:
        "Safe, age-appropriate indoor and outdoor play areas designed to develop motor skills, creativity, and confidence.",
      features: [
        "Soft flooring for safety",
        "Outdoor slides, swings, bridges & tunnels",
        "Imaginative play corners",
        "Daily structured physical activities",
      ],
    },
    {
      id: 9,
      iconType: "library",
      title: "Library & Reading Corner",
      description:
        "Cozy reading area with age-appropriate stories, picture books, and early learning materials to foster love for reading.",
      features: [
        "Weekly storytelling sessions",
        "Creative reading activities",
        "Interactive books for early literacy",
        "Comfortable reading nooks",
      ],
    },
    {
      id: 10,
      iconType: "transport",
      title: "Transportation Services",
      description:
        "Safe, reliable transportation with trained attendants, GPS tracking, and strict safety protocols for peace of mind.",
      features: [
        "Seatbelts mandatory for all children",
        "Real-time attendance on pickup/drop",
        "GPS-tracked vehicles",
        "Strict behavioral safety rules",
      ],
    },
  ]

  return (
    <div className="facilities-page">
      {/* Header Section */}
      <header className="facilities-header">
        <div className="header-bg-gradient"></div>
        <div className="header-content">
          <div className="header-badge">
            <span className="badge-emoji">✨</span>
            <span className="badge-text">WORLD-CLASS FACILITIES</span>
          </div>
          <h1 className="main-title">
            Everything Your Child Needs to
            <span className="title-gradient"> Thrive & Grow</span>
          </h1>
          <p className="main-description">
            Discover our comprehensive range of facilities designed to provide a safe, nurturing, and enriching
            environment for your child's development.
          </p>
        </div>
      </header>

      {/* Facilities Grid */}
      <section className="facilities-content">
        <div className="facilities-grid-modern">
          {facilitiesData.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="facilities-footer">
        <div className="footer-bg-pattern"></div>
        <div className="footer-content">
          <h2 className="footer-title">Ready to Experience Excellence?</h2>
          <p className="footer-description">
            Join our community and give your child access to all these amazing facilities.
          </p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </footer>
    </div>
  )
}
