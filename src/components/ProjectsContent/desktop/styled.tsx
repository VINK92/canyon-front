import { Typography, TypographyProps, styled } from "@mui/material";
import { Column } from "@src/components/shared/Flex/Column";
import { Row } from "@src/components/shared/Flex/Row";
import { ROOT_CONTAINER_MARGIN, pxToRem } from "@src/utils/styling-utils";

export const StyledDescriptionContainer = styled(Column)(() => ({
  alignItems: "end",
}));

export const StyledMenuContainer = styled(Row)(() => ({
  position: "absolute",
  justifyContent: "end",
  right: pxToRem(ROOT_CONTAINER_MARGIN),
  top: pxToRem(76),
  paddingInline: pxToRem(ROOT_CONTAINER_MARGIN),
}));

interface CustomTypographyProps extends TypographyProps {
  isactivescroll: boolean | undefined;
  index: number;
  // imageWidth: number;
  // widthToScroll: number;
}

export const StyledColumn = styled<React.FC<CustomTypographyProps>>(Typography)(
  ({
    isactivescroll,
    index,
    //  imageWidth, widthToScroll
  }) => ({
    display: "flex",
    flexDirection: "column",
    transition: "transform 3s ease",
    width: "100%",
    transform: isactivescroll ? `translateX(${630 * index}px)` : "none",
  })
);
