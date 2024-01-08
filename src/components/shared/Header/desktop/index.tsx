import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Menu } from "@src/components/shared/Menu/desktop";
import { Gap } from "@src/components/shared/Gap";
import { StyledContainer } from "./styled";

interface Props {
  alignLeft?: boolean;
  isShowMenu?: boolean;
}

export const Header: React.FC<Props> = ({
  alignLeft = false,
  isShowMenu = false,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <StyledContainer justifyContent={alignLeft ? "start" : "space-between"}>
        <Typography variant="h2">{t("header.leftPart")}</Typography>
        <Gap isHorizontal size="_16px" />
        <Typography variant="h2">{t("header.rightPart")}</Typography>
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
