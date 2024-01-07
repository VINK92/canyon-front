import React from "react";
import { ProjectsDesktop } from "@src/containers/ProjectsPage/desktop";
import { ProjectsMobile } from "@src/containers/ProjectsPage/mobile";

/**
 * there will be simple HOC that return MobilePage or DesktopPage
 * f.e.
 */

const isMobileDevice = () => true;

export const ProjectsPage: React.FC = () =>
  isMobileDevice() ? <ProjectsMobile /> : <ProjectsDesktop />;
