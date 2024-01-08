import React from "react";
import { MobileLayout } from "@src/components/shared/Layout/MobileLayout";
import { ProjectsContent } from "@src/components/ProjectsContent/mobile";

export const ProjectsMobile: React.FC = () => {
  return (
    <MobileLayout>
      <ProjectsContent />
    </MobileLayout>
  );
};
