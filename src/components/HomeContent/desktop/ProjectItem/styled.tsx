import Link from "next/link";
import { css, styled } from "@mui/material";
import { Typography, TypographyProps } from "@mui/material";
import Image from "next/image";

export const StyledImage = styled(Image)(() => ({}));

export const StyledTypography = styled(Typography)(
  () => css`
    margin-bottom: -5px;
  `
);

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
}));

interface CustomTypographyProps extends TypographyProps {
  isactivescroll: boolean | undefined;
  index: number;
  // imageWidth: number;
  // widthToScroll: number;
}

export const StyledColumn = styled<React.FC<CustomTypographyProps>>(Typography)(
  ({
    isactivescroll,
    index,
    //  imageWidth, widthToScroll
  }) => ({
    display: "flex",
    flexDirection: "column",
    transition: "transform 3s ease",
    width: "100%",
    transform: isactivescroll ? `translateX(${630 * index}px)` : "none",
  })
);
