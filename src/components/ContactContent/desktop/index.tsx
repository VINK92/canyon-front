import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Gap } from "@src/components/shared/Gap";
import image from "@src/assets/images/contact/desktop/contact-hero.png";
import {
  StyledRowContainer,
  StyledDescriptionContainer,
  StyledFooter,
} from "./styled";

export const ContactContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledRowContainer>
      <Image src={image} alt="contact-hero" />
      <StyledDescriptionContainer>
        <Typography variant="bodyDefault">
          {t("contactPage.caption")}
        </Typography>
        <StyledFooter>
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
            {t("contactPage.instagram")}
          </Typography>
          <Typography variant="bodyDefault">{t("contactPage.mail")}</Typography>
        </StyledFooter>
      </StyledDescriptionContainer>
    </StyledRowContainer>
  );
};
