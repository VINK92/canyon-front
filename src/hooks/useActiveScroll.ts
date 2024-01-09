import { useState, useEffect } from "react";

export const useActiveScroll = (): boolean => {
  const [isactivescroll, setIsactivescroll] = useState(false);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsactivescroll((prev) => !prev);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return isactivescroll;
};
