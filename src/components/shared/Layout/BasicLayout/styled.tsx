import { css, styled } from "@mui/material";
import { Column } from "@src/components/shared/Flex/Column";
import { Row } from "@src/components/shared/Flex/Row";
import { pxToRem, ROOT_CONTAINER_MARGIN } from "@src/utils/styling-utils";

export const CommonLayoutContainer = styled(Column)(
  () =>
    css`
      height: 100vh;
      display: flex;
      justify-content: space-between;
    `
);

export const HeaderContainer = styled(Column)(() => ({
  paddingInline: pxToRem(ROOT_CONTAINER_MARGIN),
  paddingTop: pxToRem(ROOT_CONTAINER_MARGIN),
}));

export const HorizontalContainer = styled(Row)(
  () => css`
    overflow-x: auto;
    white-space: nowrap;
    align-items: end;
  `
);
