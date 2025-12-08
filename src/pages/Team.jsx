import React from "react";
import CallToAction from "../components/Common/CallToAction";
import HeroSection from "../components/Common/HeroSection";
import TeachingTeam from "../components/Team/TeachingTeam";
import SpecialistTeam from "../components/Team/SpecialistTeam";
import MontessoriCertifications from "../components/Team/MontessoriCertifications";
import JoinOurTeam from "../components/Team/JoinOurTeam";

const Team = () => {
  return (
    <div>
      <HeroSection
        title="Our Team"
        badgeText="Meet the People Behind Our Success"
        showBreadcrumb={true}
        height="35vh"
        breadcrumbItems={[
          { label: "Home", path: "/", icon: "bi-house" },
          { label: "About", path: "" },
          { label: "Team", path: "/team" },
        ]}
        scrollIndicator={false}
        backgroundImage="https://images.unsplash.com/photo-1646579886741-12b59840c63f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TeachingTeam/>
      <SpecialistTeam/>
      <MontessoriCertifications/>
      <JoinOurTeam/>

      <CallToAction />
    </div>
  );
};

export default Team;
