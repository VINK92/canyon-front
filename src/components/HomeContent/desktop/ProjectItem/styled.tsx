import Link from "next/link";
import { css, styled } from "@mui/material";
import { Typography } from "@mui/material";

export const StyledTypography = styled(Typography)(
  () => css`
    margin-bottom: -3px;
  `
);

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
}));
