import { useCallback, useState } from "react";
import useWindowListener from "./useWindowListener";

interface IUseBreakpointCheck {
  breakpoint?: number;
}

export enum Breakpoint {
  Tablet = 991.98,
  Mobile = 479.98,
}

export const useBreakpointCheck = <IUseBreakpointCheck>(
  breakpoint = Breakpoint.Mobile
) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);
  const [width, setWidth] = useState<number>();

  const handleBreakpointChange = useCallback(() => {
    const { outerWidth } = window;
    setIsBreakpoint(outerWidth < breakpoint);
    setWidth(outerWidth);
  }, [breakpoint]);
  useWindowListener("resize", handleBreakpointChange);

  return { isMobileDevice: isBreakpoint, outerWidth: width };
};
