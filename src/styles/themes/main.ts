import { pxToRem } from "@src/utils/styling-utils";
import { createBasicTheme } from "./create-basic-theme";

const mainTheme = createBasicTheme({
  palette: {
    primary: {
      main: "#223189", // Primary/Dark 1
    },
    secondary: {
      main: "#226BD0", // Secondary/Default
    },

    background: {
      default: "#FFFFFF", // background white
    },
    text: {
      primary: "#000000", // textPrimary
      secondary: "#00000025", // textSecondary
    },
    transparent: "transparent",
  },
  typography: {
    h1: {
      fontFamily: "Lato, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: pxToRem(69),
      color: "#000000",
    },
    h1Inactive: {
      fontFamily: "Lato, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: pxToRem(69),
      color: "#00000025",
    },
    h3: {
      fontFamily: "Lato, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: pxToRem(30),
      color: "#000000",
    },
    h2: {
      fontFamily: "Lato, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: pxToRem(35),
      color: "#000000",
    },
    h2Inactive: {
      fontFamily: "Lato, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: pxToRem(35),
      lineHeight: "133%",
      letterSpacing: "-0.01em",
      color: "#00000025",
    },

    bodyDefault: {
      fontFamily: "Lato, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: pxToRem(15),
      color: "#000000",
    },
    bodyDefaultInactive: {
      fontFamily: "Lato, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: pxToRem(15),
      color: "#00000025",
    },

    // disable not needed default fonts
    body1: undefined,
    body2: undefined,
    button: undefined,
    caption: undefined,
    overline: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
  },
  gaps: {
    _2px: 2,
    _4px: 4,
    _8px: 8,
    _10px: 10,
    _12px: 12,
    _16px: 16,
    _20px: 20,
    _24px: 24,
    _32px: 32,
    _40px: 40,
    _48px: 48,
    _56px: 56,
    _64px: 64,
  },
});

export { mainTheme };
