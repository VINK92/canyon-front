import React from "react";
import { Box, Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
});

interface CustomTypographyProps extends TypographyProps {
  isactivescroll: boolean | undefined;
  widthToScroll: number | undefined;
}

export const StyledTypography = styled<React.FC<CustomTypographyProps>>(
  Typography
)(({ isactivescroll, widthToScroll }) => ({
  transition: "transform 3s ease",
  transform: isactivescroll ? `translateX(${widthToScroll}px)` : "none",
}));
