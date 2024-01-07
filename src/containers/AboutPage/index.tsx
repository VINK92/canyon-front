import React from "react";
import { AboutDesktop } from "@src/containers/AboutPage/desktop";
import { AboutMobile } from "@src/containers/AboutPage/mobile";

/**
 * there will be simple HOC that return MobilePage or DesktopPage
 * f.e.
 */

const isMobileDevice = () => true;

export const AboutPage: React.FC = () =>
  isMobileDevice() ? <AboutMobile /> : <AboutDesktop />;
