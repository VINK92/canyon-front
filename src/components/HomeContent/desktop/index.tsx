import React from "react";
import { ProjectItem } from "@src/components/HomeContent/desktop/ProjectItem";
import { projects } from "@src/components/HomeContent/projects";
import { HorizontalContainer } from "@src/components/shared/Layout/BasicLayout/styled";

export const HomeContent: React.FC = () => {
  return (
    <HorizontalContainer>
      {projects.map((p, index) => {
        return <ProjectItem index={index} key={p.projectTitle} {...p} />;
      })}
    </HorizontalContainer>
  );
};
