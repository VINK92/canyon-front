import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { StyledContainer } from "@src/components/shared/Header/desktop/styled";
import { Menu } from "@src/components/shared/Menu/desktop";
import { Gap } from "@src/components/shared/Gap";
import { StyledTypography } from "./styled";

interface Props {
  alignLeft?: boolean;
}

export const AnimatedHeader: React.FC<Props> = ({ alignLeft = false }) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    // if (scrollTop > 0) {
    setIsScrolled(true);
    // }
    // else {
    //   setIsScrolled(false);
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <StyledContainer justifyContent={alignLeft ? "start" : "space-between"}>
        <Typography variant="h2">{t("header.leftPart")}</Typography>
        <Gap isHorizontal size="_16px" />
        <StyledTypography isScrolled={isScrolled} variant="h2">
          {t("header.rightPart")}
        </StyledTypography>
      </StyledContainer>
      <Gap size="_40px" />
      <Menu />
    </>
  );
};
