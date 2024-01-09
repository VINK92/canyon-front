"use client";
import { useState, useEffect } from "react";

export const useActiveScroll = (): boolean => {
  const [isactivescroll, setIsactivescroll] = useState(false);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaX > 0 || event.deltaX < 0) {
        return;
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsactivescroll((prev) => !prev);
      }, 100);
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeout);
    };
  }, []);

  return isactivescroll;
};
