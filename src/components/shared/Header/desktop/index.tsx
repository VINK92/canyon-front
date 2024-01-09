import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Menu } from "@src/components/shared/Menu/desktop";
import { Gap } from "@src/components/shared/Gap";
import { StyledContainer, StyledTypography } from "./styled";
import { useActiveScroll } from "@src/hooks/useActiveScroll";

interface Props {
  alignLeft?: boolean;
  isShowMenu?: boolean;
}

export const Header: React.FC<Props> = ({
  alignLeft = false,
  isShowMenu = false,
}) => {
  const { t } = useTranslation();
  const isactivescroll = useActiveScroll();

  return (
    <>
      <StyledContainer justifyContent={alignLeft ? "start" : "space-between"}>
        <Typography variant="h2">{t("header.leftPart")}</Typography>
        <Gap isHorizontal size="_16px" />
        <StyledTypography
          isactivescroll={isactivescroll ? true : undefined}
          variant="h2"
        >
          {t("header.rightPart")}
        </StyledTypography>
      </StyledContainer>
      {isShowMenu && (
        <>
          <Gap size="_24px" />
          <Menu />
        </>
      )}
    </>
  );
};
