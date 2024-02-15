import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Menu } from "@src/components/shared/Menu/desktop";
import { Gap } from "@src/components/shared/Gap";
import { StyledContainer } from "./styled";

interface Props {}

export const StaticHeader: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledContainer justifyContent="space-between">
        <Typography variant="h2">{t("header.leftPart")}</Typography>
        <Gap isHorizontal size="_16px" />
        <Typography variant="h2">{t("header.rightPart")}</Typography>
      </StyledContainer>

      <>
        <Gap size="_24px" />
        <Menu />
      </>
    </>
  );
};
