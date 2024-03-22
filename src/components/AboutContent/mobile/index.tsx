import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Gap } from "@src/components/shared/Gap";
import { Column } from "@src/components/shared/Flex/Column";
import firstImage from "@src/assets/images/about/mobile/about-first.png";
// import secondImage from "@src/assets/images/about/mobile/about-second.png";

export const AboutContent = () => {
  const { t } = useTranslation();
  return (
    <Column>
      <Image src={firstImage} alt="first-image" layout="responsive" />
      <Gap size="_16px" />
      <Typography variant="bodyDefault">{t("aboutPage.titlePrat1")}</Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.aboutDescription1")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.aboutDescription2")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.aboutDescription3")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.aboutDescription4")}
      </Typography>
      <Gap size="_16px" />

      <Typography variant="bodyDefault">{t("aboutPage.titlePrat3")}</Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.servicesDescription1")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.servicesDescription2")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.servicesDescription3")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.servicesDescription4")}
      </Typography>
      <Gap size="_16px" />

      <Typography variant="bodyDefault">{t("aboutPage.titlePrat2")}</Typography>
      <Gap size="_16px" />
      {/* <Image src={secondImage} alt="first-image" layout="responsive" /> */}
      {/* <Gap size="_16px" /> */}
      <Typography variant="bodyDefault">
        {t("aboutPage.bioDescription1")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.bioDescription2")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.bioDescription3")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("aboutPage.bioDescription4")}
      </Typography>
      <Gap size="_16px" />
    </Column>
  );
};
