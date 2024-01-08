import React from "react";
import { BasicLayout } from "@src/components/shared/Layout/BasicLayout";
import { ProjectsContent } from "@src/components/ProjectsContent/desktop";

export const ProjectsDesktop: React.FC = () => {
  return (
    <BasicLayout>
      <ProjectsContent />
    </BasicLayout>
  );
};
