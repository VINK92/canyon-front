import React from "react";
import { AboutContent } from "@src/components/AboutContent/mobile";
import { MobileLayout } from "@src/components/shared/Layout/MobileLayout";

export const AboutMobile: React.FC = () => {
  return (
    <MobileLayout>
      <AboutContent />
    </MobileLayout>
  );
};
