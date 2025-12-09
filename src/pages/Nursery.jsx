import React from "react";
import HeroSection from "../components/Common/HeroSection";
import NurseryContent from "../components/Nursery/NurseryContent";

const Nursery = () => {
  return (
    <div>
      <HeroSection
        title="Nursery Class"
        badgeText="Ages 3-4.5 Years"
        showBreadcrumb={true}
        height="35vh"
        breadcrumbItems={[
          { label: "Home", path: "/", icon: "bi-house" },
          { label: "Programs", path: "#" },
          { label: "Nursery", path: "/nursery" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <NurseryContent />
    </div>
  );
};

export default Nursery;
