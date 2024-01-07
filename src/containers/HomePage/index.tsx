import React from "react";
import { HomeDesktop } from "@src/containers/HomePage/desktop";
import { HomeMobile } from "@src/containers/HomePage/mobile";

/**
 * there will be simple HOC that return MobilePage or DesktopPage
 * f.e.
 */
const isMobileDevice = () => true;

export const HomePage: React.FC = () =>
  isMobileDevice() ? <HomeMobile /> : <HomeDesktop />;
