import React from "react";
import { BasicLayout } from "@src/components/shared/Layout/BasicLayout";
import { HomeContent } from "@src/components/HomeContent/desktop";

export const HomeDesktop: React.FC = () => {
  return (
    <BasicLayout>
      <HomeContent />
    </BasicLayout>
  );
};
