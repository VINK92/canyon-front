import { GapDimensions } from "@src/styles/themes/create-basic-theme";

export enum Units {
  px = "px",
  rem = "rem",
  vh = "vh",
  vw = "vw",
}

export type GapProps = {
  size: keyof GapDimensions;
  unit?: Units;
};
