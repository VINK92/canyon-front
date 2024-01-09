import React from "react";
import { HorizontalContainer } from "@src/components/shared/Layout/BasicLayout/styled";
import { ProjectItem } from "@src/components/HomeContent/desktop/ProjectItem";
import { projects } from "@src/components/HomeContent/projects";
// import { useActiveScroll } from "@src/hooks/useActiveScroll";

export const HomeContent: React.FC = () => {
  // const isactivescroll = useActiveScroll();
  return (
    <HorizontalContainer
    // isactivescroll={isactivescroll}
    >
      {projects.map((p, index) => {
        return <ProjectItem index={index} key={p.projectTitle} {...p} />;
      })}
    </HorizontalContainer>
  );
};
