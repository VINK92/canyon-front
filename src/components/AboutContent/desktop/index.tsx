import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import firstImage from "@src/assets/images/about/desktop/about-first.png";
// import secondImage from "@src/assets/images/about/desktop/about-second.png";
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
        <Gap size="_16px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.aboutDescription1")}
        </Typography>
        <Gap size="_8px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.aboutDescription2")}
        </Typography>
        <Gap size="_8px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.aboutDescription3")}
        </Typography>
        <Gap size="_8px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.aboutDescription4")}
        </Typography>
        <Gap size="_48px" />
        {/*  */}
        <Typography variant="bodyDefault">
          {t("aboutPage.titlePrat3")}
        </Typography>
        <Gap size="_16px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.servicesDescription1")}
        </Typography>
        <Gap size="_8px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.servicesDescription2")}
        </Typography>
        <Gap size="_8px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.servicesDescription3")}
        </Typography>
        <Gap size="_8px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.servicesDescription4")}
        </Typography>
        <Gap size="_48px" />
        {/*  */}
        <Typography variant="bodyDefault">
          {t("aboutPage.titlePrat2")}
        </Typography>
        <Gap size="_16px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.bioDescription1")}
        </Typography>
        <Gap size="_8px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.bioDescription2")}
        </Typography>
        <Gap size="_8px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.bioDescription3")}
        </Typography>
        <Gap size="_8px" />
        <Typography variant="bodyDefault">
          {t("aboutPage.bioDescription4")}
        </Typography>
      </StyledDescriptionContainer>
      {/* <Image src={secondImage} alt="second-image" /> */}
    </StyledRowContainer>
  );
};
