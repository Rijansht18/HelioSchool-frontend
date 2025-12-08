import React from "react";
import CallToAction from "../components/Common/CallToAction";
import HeroSection from "../components/Common/HeroSection";
import PrincipalMessage from "../components/Principal/PrincipalMessage";

const Principal = () => {
  return (
    <div>
      <HeroSection
        title="Principal's Message"
        badgeText="Our Story & Philosophy"
        showBreadcrumb={true}
        height="35vh"
        breadcrumbItems={[
          { label: "Home", path: "/", icon: "bi-house" },
          { label: "About", path: "" },
          { label: "Principal's Message", path: "/principal" },
        ]}
        backgroundImage="https://plus.unsplash.com/premium_photo-1661434560425-f7bee05aa75d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <PrincipalMessage/>

      <CallToAction />
    </div>
  );
};

export default Principal;
