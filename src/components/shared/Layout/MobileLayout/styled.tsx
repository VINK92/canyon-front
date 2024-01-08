import { styled } from "@mui/material";
import { Column } from "@src/components/shared/Flex/Column";
import { pxToRem, ROOT_CONTAINER_MARGIN } from "@src/utils/styling-utils";

export const StyledCommonContainer = styled(Column)(() => ({
  width: "100%",
  paddingInline: pxToRem(ROOT_CONTAINER_MARGIN),
}));
