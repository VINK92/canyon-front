import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import firstImage from "@src/assets/images/about/desktop/contact-first.png";
import secondImage from "@src/assets/images/about/desktop/contact-second.png";
import {
  StyledDescriptionContainer,
  StyledRowContainer,
} from "@src/components/AboutContent/desktop/styled";
import { Typography } from "@mui/material";
import { Gap } from "@src/components/shared/Gap";

export const AboutContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledRowContainer>
      <Image src={firstImage} alt="first-image" />
      <StyledDescriptionContainer>
        <Typography variant="bodyDefault">
          {t("aboutPage.titlePrat1")}
        </Typography>
        <Typography variant="bodyDefault">
          {t("aboutPage.titlePrat2")}
        </Typography>
        <Typography variant="bodyDefault">
          {t("aboutPage.titlePrat3")}
        </Typography>
        <Gap size="_64px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.descriptionFirstPart")}
        </Typography>
        <Gap size="_16px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.descriptionSecondPart")}
        </Typography>
      </StyledDescriptionContainer>
      <Image src={secondImage} alt="second-image" />
    </StyledRowContainer>
  );
};
