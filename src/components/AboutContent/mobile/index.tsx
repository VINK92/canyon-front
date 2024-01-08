import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Gap } from "@src/components/shared/Gap";
import firstImage from "@src/assets/images/about/mobile/about-first.png";
import secondImage from "@src/assets/images/about/mobile/about-second.png";
import { StyledContainer } from "./styled";

export const AboutContent = () => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <Image src={firstImage} alt="first-image" />
      <Gap size="_16px" />
      <Typography variant="bodyDefault">{t("aboutPage.titlePrat1")}</Typography>
      <Typography variant="bodyDefault">{t("aboutPage.titlePrat2")}</Typography>
      <Typography variant="bodyDefault">{t("aboutPage.titlePrat3")}</Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.descriptionFirstPart")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.descriptionSecondPart")}
      </Typography>
      <Gap size="_16px" />
      <Image src={secondImage} alt="first-image" width={370} />
      <Gap size="_16px" />
      <Typography variant="bodyDefault">{t("aboutPage.titlePrat1")}</Typography>
      <Typography variant="bodyDefault">{t("aboutPage.titlePrat2")}</Typography>
      <Typography variant="bodyDefault">{t("aboutPage.titlePrat3")}</Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.descriptionFirstPart")}
      </Typography>
    </StyledContainer>
  );
};
