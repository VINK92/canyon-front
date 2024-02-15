import { Typography, styled } from "@mui/material";
import { Column } from "@src/components/shared/Flex/Column";
import { Row } from "@src/components/shared/Flex/Row";

export const StyledDescriptionContainer = styled(Row)(() => ({
  justifyContent: "space-between",
}));

export const StyledCaptionContainer = styled(Column)(() => ({
  justifyContent: "end",
  alignItems: "end",
}));
