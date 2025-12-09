import React from "react";
import HeroSection from "../components/Common/HeroSection";
import LKGContent from "../components/LKG/LKGContent";

const LKG = () => {
  return (
    <div>
      <HeroSection
        title="LKG Class"
        badgeText="Ages 4-5 Years"
        showBreadcrumb={true}
        height="35vh"
        breadcrumbItems={[
          { label: "Home", path: "/", icon: "bi-house" },
          { label: "Programs", path: "#" },
          { label: "LKG", path: "/lkg" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <LKGContent />
    </div>
  );
};

export default LKG;
