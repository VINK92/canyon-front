"use client";
import { useState, useEffect } from "react";

export const useActiveScroll = (): boolean => {
  const [isactivescroll, setIsactivescroll] = useState(false);
  // const [scrollStack, setScrollStack] = useState(0);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaX > 0 || event.deltaX < 0) {
        return;
      }
      if (event.deltaY > 0) {
        setIsactivescroll(false);
        // console.log(event.deltaY, event.deltaY > 50);
      }
      if (event.deltaY < -50) {
        setIsactivescroll(true);
        // console.log(event.deltaY);
      }
      // clearTimeout(timeout);
      // timeout = setTimeout(() => {
      //   if (scrollStack === 0) {
      //     setIsactivescroll((prev) => !prev);
      //     setScrollStack(1);
      //   } else if (scrollStack === 1) {
      //     setIsactivescroll((prev) => !prev);
      //     setScrollStack(2);
      //   }
      // }, 150);
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeout);
    };
  }, []);

  return isactivescroll;
};
