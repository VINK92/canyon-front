import { styled, Theme } from "@mui/material/styles";
import { pxToRem, pxToVh, pxToVw } from "@src/utils/styling-utils";
import { GapDimensions } from "@src/styles/themes/create-basic-theme";
import { GapProps, Units } from "./types";

const px = (value: number) => `${value}px`;
const pxToUnit = (
  value: keyof GapDimensions,
  theme: Theme,
  unit: Units = Units.rem
) => {
  const mapper = {
    [Units.px]: px,
    [Units.rem]: pxToRem,
    [Units.vh]: pxToVh,
    [Units.vw]: pxToVw,
  };
  return mapper[unit](theme.gaps[value]);
};

export const HorizontalGap = styled("div")<GapProps>(
  ({ theme, size, unit }) => ({
    width: pxToUnit(size, theme, unit),
  })
);

export const VerticalGap = styled("div")<GapProps>(({ theme, size, unit }) => ({
  paddingTop: pxToUnit(size, theme, unit),
}));
