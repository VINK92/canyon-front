import { styled } from "@mui/material";
import { Column } from "@src/components/shared/Flex/Column";

export const StyledMenuContainer = styled(Column)(({ theme }) => ({
  width: "100%",
  height: "96%",
  position: "fixed",
  backgroundColor: theme.palette.background.default,
  top: 39,
  justifyContent: "end",
}));
