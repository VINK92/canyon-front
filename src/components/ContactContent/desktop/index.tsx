import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Gap } from "@src/components/shared/Gap";
// import image from "@src/assets/images/contact/desktop/contact-hero.png";
import {
  StyledRowContainer,
  StyledDescriptionContainer,
  StyledLink,
} from "./styled";
import { Column } from "@src/components/shared/Flex/Column";

export const ContactContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledRowContainer>
      {/* <Image src={image} alt="contact-hero" /> */}
      <StyledDescriptionContainer>
        <Typography variant="bodyDefault">
          {t("contactPage.caption")}
        </Typography>
        <Gap size="_16px" />
        <Column>
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
          <StyledLink
            href="https://www.instagram.com/canyoncreativedesign"
            target="_blank"
          >
            <Typography variant="bodyDefault">
              {t("contactPage.instagram")}
            </Typography>
          </StyledLink>
          <StyledLink href="mailto:hello@canyoncreative.design" target="_blank">
            <Typography variant="bodyDefault">
              {t("contactPage.mail")}
            </Typography>
          </StyledLink>
        </Column>
      </StyledDescriptionContainer>
    </StyledRowContainer>
  );
};
