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
}

export const StyledTypography = styled<React.FC<CustomTypographyProps>>(
  Typography
)(({ isactivescroll }) => ({
  transition: "transform 3s ease",
  transform: isactivescroll ? "translateX(620px)" : "none",
}));
