import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { HorizontalContainer } from "@src/components/shared/Layout/BasicLayout/styled";
import { Menu } from "@src/components/shared/Menu/desktop";
import { projects } from "@src/components/HomeContent/projects";
import { Typography } from "@mui/material";
import { Gap } from "@src/components/shared/Gap";
import { StyledDescriptionContainer, StyledMenuContainer } from "./styled";

export const ProjectsContent = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((el) => el.id === +id!);
  return (
    <>
      <StyledMenuContainer>
        <Menu />
        <StyledDescriptionContainer>
          <Typography variant="bodyDefault">{project?.projectTitle}</Typography>
          <Typography variant="bodyDefault">
            {project?.portfolio.caption}
          </Typography>
        </StyledDescriptionContainer>
      </StyledMenuContainer>
      <Gap size="_40px" />
      <HorizontalContainer>
        {project?.portfolio.images.map((image) => (
          <>
            <Image src={image} alt="project-image" />
            <Gap size="_8px" />
          </>
        ))}
      </HorizontalContainer>
    </>
  );
};
