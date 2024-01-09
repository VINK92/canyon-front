import Link, { LinkProps } from "next/link";
import { css, styled } from "@mui/material";
import { Typography, TypographyProps } from "@mui/material";
import Image from "next/image";

// type CustomLinkProps = LinkProps & {
//   isactivescroll: boolean | undefined;
// };

export const StyledImage = styled(Image)(() => ({}));

export const StyledTypography = styled(Typography)(
  () => css`
    margin-bottom: -3px;
  `
);

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
}));

interface CustomTypographyProps extends TypographyProps {
  isactivescroll: boolean | undefined;
  index: number;
  imageWidth: any;
}

export const StyledColumn = styled<React.FC<CustomTypographyProps>>(Typography)(
  ({ isactivescroll, index, imageWidth }) => ({
    display: "flex",
    flexDirection: "column",
    transition: "transform 3s ease",
    // transform: isactivescroll ? "translateX(620px)" : "none",
    transform: isactivescroll
      ? `translateX(calc((100% + 20px) * ${index}))`
      : "none",
  })
);
