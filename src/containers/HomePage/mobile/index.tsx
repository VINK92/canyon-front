import { HomeContent } from "@src/components/HomeContent/mobile";
import { MobileLayout } from "@src/components/shared/Layout/MobileLayout";
import React from "react";

export const HomeMobile: React.FC = () => {
  return (
    <MobileLayout>
      <HomeContent />
    </MobileLayout>
  );
};
