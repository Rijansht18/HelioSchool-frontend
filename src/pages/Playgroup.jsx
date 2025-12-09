import React from "react";
import HeroSection from "../components/Common/HeroSection";
import PlaygroupContent from "../components/Playgroup/PlaygroupContent";

const Playgroup = () => {
  return (
    <div>
      <HeroSection
        title="Little Steps Playgroup"
        badgeText="Ages 2-4 Years"
        showBreadcrumb={true}
        height="35vh"
        breadcrumbItems={[
          { label: "Home", path: "/", icon: "bi-house" },
          { label: "Programs", path: "#" },
          { label: "Playgroup", path: "/playgroup" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <PlaygroupContent />
    </div>
  );
};

export default Playgroup;
