import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Gap } from "@src/components/shared/Gap";
import openButton from "@src/assets/icons/open-menu-button.svg";
import closeButton from "@src/assets/icons/close-menu-button.svg";
import { StyledContainer } from "./styled";
import { Menu } from "@src/components/shared/Menu/mobile";

interface Props {}

export const MobileHeader: React.FC<Props> = () => {
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <StyledContainer>
        <>
          <Typography variant="h3">{t("header.leftPart")}</Typography>
          <Typography variant="h3">{t("header.rightPart")}</Typography>
        </>
        <Image
          src={isOpenMenu ? closeButton : openButton}
          alt="menu"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        />
      </StyledContainer>
      {isOpenMenu && <Menu />}
    </>
  );
};
