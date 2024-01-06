import React from "react";
import { AboutDesktop } from "@src/containers/About/desktop";
import { AboutMobile } from "@src/containers/About/mobile";

/**
 * there will be simple HOC that return MobilePage or DesktopPage
 * f.e.
 */

const isMobileDevice = () => false;

export const HomePage: React.FC = () =>
  isMobileDevice() ? <AboutMobile /> : <AboutDesktop />;
