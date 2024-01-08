import React from "react";
import { ProjectsDesktop } from "@src/containers/ProjectsPage/desktop";
import { ProjectsMobile } from "@src/containers/ProjectsPage/mobile";
import { Breakpoint, useBreakpointCheck } from "@src/hooks/useBreakpointCheck";

export const ProjectsPage: React.FC = () => {
  const isMobileDevice = useBreakpointCheck(Breakpoint.Mobile);
  if (isMobileDevice) {
    return <ProjectsMobile />;
  } else {
    return <ProjectsDesktop />;
  }
};
