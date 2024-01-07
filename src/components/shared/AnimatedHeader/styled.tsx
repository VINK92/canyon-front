import { Box, Typography, css, TypographyOwnProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  position: "fixed",
});

export const StyledTypography = styled<
  React.FC<{ isScrolled: boolean } & TypographyOwnProps>
>(Typography)(({ isScrolled }) => ({
  whiteSpace: "nowrap",
  transform: `${isScrolled ? "translateY(-20px)" : "none"}`,
  transition: "transform 0.3s ease",
}));
