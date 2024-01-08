import React, { useState } from "react";
import Image from "next/image";
import { IProject } from "@src/components/HomeContent/projects";
import { Column } from "@src/components/shared/Flex/Column";
import { StyledTypography, StyledLink } from "./styled";

interface Props extends IProject {}

export const ProjectItem: React.FC<Props> = ({
  projectTitle,
  imageInactive,
  imageActive,
  alt,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const to = `/projects?id=${id}`;
  return (
    <StyledLink href={to}>
      <Column>
        <StyledTypography variant="bodyDefault">
          {projectTitle}
        </StyledTypography>
        <Image
          src={isHovered ? imageActive : imageInactive}
          alt={alt}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </Column>
    </StyledLink>
  );
};
