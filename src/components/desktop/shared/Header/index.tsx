import React from "react";
import { StyledContainer } from "@src/components/desktop/shared/Header/styled";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <span>{t("header.leftPart")}</span>
      <span>{t("header.fightPart")}</span>
    </StyledContainer>
  );
};
