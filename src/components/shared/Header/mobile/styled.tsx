import { styled } from "@mui/material/styles";
import { Row } from "@src/components/shared/Flex/Row";
import { ROOT_CONTAINER_MARGIN, pxToRem } from "@src/utils/styling-utils";

export const StyledContainer = styled(Row)(({ theme }) => ({
  position: "fixed",
  display: "flex",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
  paddingTop: pxToRem(theme.gaps._4px),
  paddingInline: pxToRem(ROOT_CONTAINER_MARGIN),
  marginLeft: `-${pxToRem(ROOT_CONTAINER_MARGIN)}`,
}));
