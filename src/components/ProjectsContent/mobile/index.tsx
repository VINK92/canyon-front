import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Column } from "@src/components/shared/Flex/Column";
import { projects } from "@src/components/HomeContent/projects";
import { Typography } from "@mui/material";
import { Gap } from "@src/components/shared/Gap";
import { StyledDescriptionContainer } from "./styled";

export const ProjectsContent: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((el) => el.id === +id!);
  return (
    <Column>
      <Gap size="_8px" />
      <StyledDescriptionContainer>
        <Typography variant="bodyDefault">{project?.projectTitle}</Typography>
        <Typography variant="bodyDefault">
          {project?.portfolio.caption}
        </Typography>
      </StyledDescriptionContainer>
      <Gap size="_8px" />
      {project?.portfolio.images.map((image) => (
        <>
          <Image src={image} alt="project-image" layout="responsive" />
          <Gap size="_8px" />
        </>
      ))}
    </Column>
  );
};
