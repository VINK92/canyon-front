import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { StyledContainer } from "@src/components/shared/Header/styled";
import { Menu } from "@src/components/shared/Menu";
import { Gap } from "@src/components/shared/Gap";

interface Props {
  alignLeft?: boolean;
}

export const Header: React.FC<Props> = ({ alignLeft = false }) => {
  const { t } = useTranslation();

  return (
    <>
      <StyledContainer justifyContent={alignLeft ? "start" : "space-between"}>
        <Typography variant="h2">{t("header.leftPart")}</Typography>
        <Gap isHorizontal size="_16px" />
        <Typography variant="h2">{t("header.rightPart")}</Typography>
      </StyledContainer>
      <Gap size="_40px" />
      <Menu />
    </>
  );
};
