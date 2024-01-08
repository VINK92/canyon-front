import React from "react";
import { HomeDesktop } from "@src/containers/HomePage/desktop";
import { HomeMobile } from "@src/containers/HomePage/mobile";
import { useBreakpointCheck, Breakpoint } from "@src/hooks/useBreakpointCheck";

export const HomePage: React.FC = () => {
  const isMobileDevice = useBreakpointCheck(Breakpoint.Mobile);
  if (isMobileDevice) {
    return <HomeMobile />;
  } else {
    return <HomeDesktop />;
  }
};
