import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Menu } from "@src/components/shared/Menu/desktop";
import { Gap } from "@src/components/shared/Gap";
import { StyledContainer, StyledTypography } from "./styled";
import { useActiveScroll } from "@src/hooks/useActiveScroll";
import { useBreakpointCheck } from "@src/hooks/useBreakpointCheck";

interface Props {}

export const Header: React.FC<Props> = () => {
  const { t } = useTranslation();
  const isactivescroll = useActiveScroll();
  const { outerWidth } = useBreakpointCheck();
  const widthToScroll = outerWidth! - 180 * 2;

  return (
    <>
      <StyledContainer justifyContent="start">
        <Typography variant="h2">{t("header.leftPart")}</Typography>
        <Gap isHorizontal size="_16px" />
        <StyledTypography
          widthToScroll={widthToScroll}
          isactivescroll={isactivescroll ? true : undefined}
          variant="h2"
        >
          {t("header.rightPart")}
        </StyledTypography>
      </StyledContainer>

      <>
        <Gap size="_24px" />
        <Menu />
      </>
    </>
  );
};
