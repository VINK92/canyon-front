import React from "react";
import { HorizontalContainer } from "@src/components/shared/Layout/BasicLayout/styled";
import { ProjectItem } from "@src/components/HomeContent/desktop/ProjectItem";
import { projects } from "@src/components/HomeContent/projects";

export const HomeContent: React.FC = () => {
  return (
    <HorizontalContainer>
      {projects.map((p) => (
        <ProjectItem {...p} />
      ))}
    </HorizontalContainer>
  );
};
