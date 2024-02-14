import React, { useState, useEffect } from "react";
import { IProject } from "@src/components/HomeContent/projects";
import { useActiveScroll } from "@src/hooks/useActiveScroll";
// import { useBreakpointCheck } from "@src/hooks/useBreakpointCheck";
import {
  StyledTypography,
  StyledLink,
  StyledColumn,
  StyledImage,
} from "./styled";

interface Props extends IProject {
  index: number;
  // style: React.CSSProperties;
}

export const ProjectItem: React.FC<Props> = ({
  projectTitle,
  imageInactive,
  imageActive,
  alt,
  id,
  index,
  // style,
}) => {
  // const isactivescroll = useActiveScroll();
  // const { outerWidth } = useBreakpointCheck();

  const [isHovered, setIsHovered] = useState(false);
  const option = `/${id}`;
  const isFirstItem = index === 0;

  // useEffect(() => {
  //   if (!isactivescroll) window.scroll({ left: 10000, behavior: "smooth" });
  // }, [isactivescroll]);

  // const widthToScroll = outerWidth! / 2 - Number(imageActive.width) * index;

  return (
    <StyledLink
      href={option}
      // style={style}
    >
      <StyledColumn
        isactivescroll={false}
        // isactivescroll={isFirstItem ? false : isactivescroll}
        index={index}
        // imageWidth={imageActive.width}
        // widthToScroll={widthToScroll}
      >
        <StyledTypography variant="bodyDefault">
          {projectTitle}
        </StyledTypography>
        <StyledImage
          src={isHovered ? imageActive : imageInactive}
          alt={alt}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </StyledColumn>
    </StyledLink>
  );
};
