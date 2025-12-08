import React from "react";
import HeroSection from "../components/Common/HeroSection";
import MissionValues from "../components/AboutUs/MissionValues";
import LeadershipTeam from "../components/AboutUs/LeadershipTeam";
import CallToAction from "../components/Common/CallToAction";

const About = () => {
  return (
    <div>
      <HeroSection
        title="About Helio School"
        badgeText="Our Story & Philosophy"
        showBreadcrumb={true}
        height="35vh"
        breadcrumbItems={[
          { label: "Home", path: "/", icon: "bi-house" },
          { label: "About Us", path: "/about" },
        ]}
        scrollIndicator={false}
        backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <MissionValues/>
      <LeadershipTeam/>
      <CallToAction/>
    </div>
  );
};

export default About;
