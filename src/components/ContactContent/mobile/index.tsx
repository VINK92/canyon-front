import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Gap } from "@src/components/shared/Gap";
import image from "@src/assets/images/contact/mobile/contact-hero.png";
import { Column } from "@src/components/shared/Flex/Column";

export const ContactContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Column>
      <Gap size="_40px" />
      <Typography variant="bodyDefault">{t("contactPage.caption")}</Typography>
      <Gap size="_40px" />
      <Typography variant="bodyDefault">
        {t("contactPage.addressStreet")}
      </Typography>
      <Typography variant="bodyDefault">
        {t("contactPage.addressSuit")}
      </Typography>
      <Typography variant="bodyDefault">
        {t("contactPage.addressDistrict")}
      </Typography>
      <Gap size="_16px" />
      <Typography variant="bodyDefault">
        {t("contactPage.phone")}
      </Typography>
      <Typography variant="bodyDefault">
        {t("contactPage.instagram")}
      </Typography>
      <Typography variant="bodyDefault">{t("contactPage.mail")}</Typography>
      <Gap size="_12px" />
      {/* <Image src={image} alt="contact-hero" layout="responsive" /> */}
    </Column>
  );
};
