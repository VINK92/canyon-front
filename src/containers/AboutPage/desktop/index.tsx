import React from "react";
import { BasicLayout } from "@src/components/shared/Layout/BasicLayout";
import { AboutContent } from "@src/components/AboutContent/desktop";

export const AboutDesktop: React.FC = () => {
  return (
    <BasicLayout isShowMenu={true}>
      <AboutContent />
    </BasicLayout>
  );
};
