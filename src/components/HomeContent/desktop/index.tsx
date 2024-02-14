import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
// import Swiper core and required modules
import { Mousewheel, Parallax } from "swiper/modules";
import { ProjectItem } from "@src/components/HomeContent/desktop/ProjectItem";
import { projects } from "@src/components/HomeContent/projects";
// import { HorizontalContainer } from "@src/components/shared/Layout/BasicLayout/styled";
import useActiveSlider from "@src/hooks/useActiveSlider";
import { useActiveScroll } from "@src/hooks/useActiveScroll";

export const HomeContent: React.FC = () => {
  // useEffect(() => {
  //   const scroller = document.querySelector(".scroller")!;

  //   function handleWheel() {
  //     const scrollerContent = Array.from(scroller!.children);
  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true);
  //       scroller.appendChild(duplicatedItem);
  //     });
  //   }
  //   // If a user hasn't opted in for recuded motion, then we add the animation
  //   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //     handleWheel();
  //     // window.addEventListener("wheel", handleWheel);
  //   }

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);
  const isactivescroll = useActiveScroll();
  const [isAutoplay, setIsAutoplay] = useState(false);
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const swiperRef = useRef<any>(null);

  useActiveSlider(swiperRef, setIsAutoplay);

  const slides = projects.map((p, index) => {
    return (
      <SwiperSlide
        key={p.projectTitle}
        style={{
          flexShrink: "unset",
          display: "flex",
          alignItems: "end",
          // transition: "transform 5s ease",
          transition: "margin 5.5s ease",
          // ...(isactivescroll && { marginRight: 630 }),
          // transform: isactivescroll ? `translateX(${630 * index}px)` : "none",
        }}
      >
        <ProjectItem index={index} {...p} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      style={{
        width: "100vw",
        border: "2px",
        borderStyle: "solid",
        borderColor: "lime",
      }}
      ref={swiperRef}
      slidesPerView={"auto"}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 20,
        // invert: false,
        // releaseOnEdges: true,
      }}
      loop
      spaceBetween={isactivescroll ? 630 : 0}
      direction="horizontal"
      // Modules
      modules={[Mousewheel, Parallax]}
    >
      {slides}
    </Swiper>
  );

  // return (
  //   <HorizontalContainer className="scroller">
  //     {/* <Carousel infiniteLoop axis={"horizontal"} showThumbs={false}> */}
  //     {projects.map((p, index) => {
  //       return (
  //         <ProjectItem
  //           index={index}
  //           key={p.projectTitle}
  //           // style={{
  //           //   transform: `translateX(${100 * (index - currentIndex)}%)`,
  //           // }}
  //           {...p}
  //         />
  //       );
  //     })}
  //     {/* </Carousel> */}
  //   </HorizontalContainer>
  // );
};
