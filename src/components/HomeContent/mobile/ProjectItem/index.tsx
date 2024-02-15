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
  const option = `/${id}`;
  return (
    <StyledLink href={option}>
      <Column>
        <Image src={imageInactive} alt={alt} layout="responsive" />
        <Gap size="_2px" />
        <Typography variant="bodyDefault">
          {projectTitle.toLocaleUpperCase()}
        </Typography>
        <Gap size="_16px" />
      </Column>
    </StyledLink>
  );
};
