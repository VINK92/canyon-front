import React from "react";
import Image from "next/image";
import { IProject } from "@src/components/HomeContent/projects";
import { Column } from "@src/components/shared/Flex/Column";
import { Typography } from "@mui/material";
import { Gap } from "@src/components/shared/Gap";
import { StyledLink } from "./styled";

interface Props extends IProject {}

export const ProjectItem: React.FC<Props> = ({
  projectTitle,
  imageInactive,
  alt,
  id,
}) => {
  const to = `/projects?id=${id}`;
  return (
    <StyledLink href={to}>
      <Column>
        <Image src={imageInactive} alt={alt} layout="responsive" />
        <Typography variant="bodyDefault">{projectTitle}</Typography>
        <Gap size="_16px" />
      </Column>
    </StyledLink>
  );
};
