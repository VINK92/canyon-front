import React from "react";
import { HomeDesktop } from "@src/containers/Home/desktop";
import { HomeMobile } from "@src/containers/Home/mobile";

/**
 * there will be simple HOC that return MobilePage or DesktopPage
 * f.e.
 */
const DesktopActivityPage = null;
const isMobileDevice = () => false;

export const HomePage: React.FC = () =>
  isMobileDevice() ? <HomeMobile /> : <HomeDesktop />;
