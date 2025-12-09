import React from "react";
import HeroSection from "../components/Common/HeroSection";
import FacilitiesContent from "../components/Facilities/FacilitiesContent";

const Facilities = () => {
  return (
    <div>
      <HeroSection
        title="Facilities"
        badgeText="Our Facilities & Services"
        showBreadcrumb={true}
        height="35vh"
        breadcrumbItems={[
          { label: "Home", path: "/", icon: "bi-house" },
          { label: "Facilities", path: "/facilities" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <FacilitiesContent />
    </div>
  );
};

export default Facilities;
