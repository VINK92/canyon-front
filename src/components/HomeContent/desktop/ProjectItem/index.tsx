import React, { useState } from "react";
import Image from "next/image";
import { IProject } from "@src/components/HomeContent/projects";
import { Typography } from "@mui/material";
import { Column } from "@src/components/shared/Flex/Column";
import { StyledTypography } from "./styled";

interface Props extends IProject {}

export const ProjectItem: React.FC<Props> = ({
  projectTitle,
  imageInactive,
  imageActive,
  alt,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Column>
      <StyledTypography variant="bodyDefault">{projectTitle}</StyledTypography>
      <Image
        src={isHovered ? imageActive : imageInactive}
        alt={alt}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </Column>
  );
};
