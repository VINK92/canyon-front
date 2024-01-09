import React from "react";
import { projects } from "@src/components/HomeContent/projects";
import { ProjectItem } from "@src/components/HomeContent/mobile/ProjectItem";
import { Column } from "@src/components/shared/Flex/Column";

export const HomeContent: React.FC = () => {
  return (
    <Column>
      {projects.map((p) => (
        <ProjectItem key={p.projectTitle} {...p} />
      ))}
    </Column>
  );
};
