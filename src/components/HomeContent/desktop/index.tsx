import React from "react";
import { AnimatedLayout } from "@src/components/shared/Layout/AnimatedLayout";
import { projects } from "@src/components/HomeContent/projects";
import { HorizontalContainer } from "@src/components/shared/Layout/AnimatedLayout/styled";
import { ProjectItem } from "@src/components/HomeContent/desktop/ProjectItem";

export const HomeContent: React.FC = () => {
  return (
    <AnimatedLayout>
      <HorizontalContainer>
        {projects.map((p) => (
          <ProjectItem {...p} />
        ))}
      </HorizontalContainer>
    </AnimatedLayout>
  );
};
