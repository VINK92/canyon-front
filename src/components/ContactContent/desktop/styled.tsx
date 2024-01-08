import { css, styled } from "@mui/material";
import { Column } from "@src/components/shared/Flex/Column";
import { Row } from "@src/components/shared/Flex/Row";

export const StyledDescriptionContainer = styled(Column)(
  () => css`
    justify-content: space-between;
    padding: 16px;
    height: 100%;
  `
);

export const StyledRowContainer = styled(Row)(
  () => css`
    align-items: end;
  `
);
