import { useCallback, useState } from "react";
import useWindowListener from "./useWindowListener";

interface IUseBreakpointCheck {
  (breakpoint: number): boolean;
}

export enum Breakpoint {
  Tablet = 991.98,
  Mobile = 479.98,
}

export const useBreakpointCheck: IUseBreakpointCheck = (breakpoint) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  const handleBreakpointChange = useCallback(() => {
    const { outerWidth } = window;
    setIsBreakpoint(outerWidth < breakpoint);
  }, [breakpoint]);
  useWindowListener("resize", handleBreakpointChange);

  return isBreakpoint;
};
