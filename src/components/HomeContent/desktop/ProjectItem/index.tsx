import React, { useEffect, useState } from "react";
// import Image from "next/image";
import { IProject } from "@src/components/HomeContent/projects";
import { Column } from "@src/components/shared/Flex/Column";
import { useActiveScroll } from "@src/hooks/useActiveScroll";
import { Gap } from "@src/components/shared/Gap";
import { projects } from "@src/components/HomeContent/projects";
import {
  StyledTypography,
  StyledLink,
  StyledColumn,
  StyledImage,
} from "./styled";

interface Props extends IProject {
  index: number;
}

export const ProjectItem: React.FC<Props> = ({
  projectTitle,
  imageInactive,
  imageActive,
  alt,
  id,
  index,
}) => {
  // const [isShowGap, setIsShowGap] = useState(false);
  const isactivescroll = useActiveScroll();

  // useEffect(() => {
  //   setIsShowGap((prev) => !prev);
  // }, [isactivescroll]);

  const [imageWidth, setImageWidth] = useState<null | unknown>(null);

  useEffect(() => {
    const loadImageWidth = async (src: string) => {
      const image = new Image();
      image.src = src;

      return new Promise((resolve) => {
        image.onload = () => {
          resolve(image.width);
        };
      });
    };

    const updateImageWidth = async () => {
      const firstImageSrc = projects[0]?.imageInactive; // Замініть imageUrl на відповідне поле вашого об'єкта
      if (firstImageSrc) {
        const width = await loadImageWidth(`${firstImageSrc}`);
        setImageWidth(width);
      }
    };

    updateImageWidth();
  }, [projects]);

  const [isHovered, setIsHovered] = useState(false);
  const option = { pathname: "/projects", query: { id } };
  const isFirstItem = index === 0;
  return (
    <StyledLink href={option}>
      <StyledColumn
        isactivescroll={isFirstItem ? false : isactivescroll}
        index={index}
        imageWidth={imageWidth}
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
