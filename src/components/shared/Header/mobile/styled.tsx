import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "@src/utils/styling-utils";

export const StyledContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  display: "flex",
  minWidth: pxToRem(370),
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
  paddingTop: pxToRem(theme.gaps._4px),
}));
