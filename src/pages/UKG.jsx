import React from "react";
import HeroSection from "../components/Common/HeroSection";
import UKGContent from "../components/UKG/UKGContent";

const UKG = () => {
  return (
    <div>
      <HeroSection
        title="UKG Class"
        badgeText="Ages 5-6 Years"
        showBreadcrumb={true}
        height="35vh"
        breadcrumbItems={[
          { label: "Home", path: "/", icon: "bi-house" },
          { label: "Programs", path: "#" },
          { label: "UKG", path: "/ukg" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <UKGContent />
    </div>
  );
};

export default UKG;
