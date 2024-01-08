import { styled } from "@mui/material";
import { Column } from "@src/components/shared/Flex/Column";
import { ROOT_CONTAINER_MARGIN, pxToRem } from "@src/utils/styling-utils";

export const StyledDescriptionContainer = styled(Column)(() => ({
  alignItems: "end",
  paddingInline: pxToRem(ROOT_CONTAINER_MARGIN),
}));
