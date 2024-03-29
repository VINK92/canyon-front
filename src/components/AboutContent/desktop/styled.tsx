import { css, styled } from "@mui/material";
import { Row } from "@src/components/shared/Flex/Row";

export const StyledDescriptionContainer = styled("div")(
  () => css`
    display: flex;
    flex-direction: column;
    padding: 16px;
    /* overflow-y: auto;
    max-height: 688px; */
  `
);

export const StyledRowContainer = styled(Row)(
  () => css`
    align-items: end;
  `
);
