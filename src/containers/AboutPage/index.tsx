import React from "react";
import { AboutDesktop } from "@src/containers/AboutPage/desktop";
import { AboutMobile } from "@src/containers/AboutPage/mobile";
import { Breakpoint, useBreakpointCheck } from "@src/hooks/useBreakpointCheck";


export const AboutPage: React.FC = () => {
  const isMobileDevice = useBreakpointCheck(Breakpoint.Mobile);
  if (isMobileDevice) {
    return <AboutMobile />;
  } else {
    return <AboutDesktop />;
  }
};
