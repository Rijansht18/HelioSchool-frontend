import React from "react";
import HeroSection from "../components/Common/HeroSection";
import CurriculumContent from "../components/Curriculum/CurriculumContent";

const Curriculum = () => {
  return (
    <div>
      <HeroSection
        title="Our Curriculum"
        subtitle="Comprehensive Learning Programs"
        description="Discover our thoughtfully designed curriculum that nurtures young minds through engaging activities and structured learning experiences."
        backgroundImage="/api/placeholder/1200/600"
      />
      <CurriculumContent />
    </div>
  );
};

export default Curriculum;