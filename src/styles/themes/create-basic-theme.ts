import React from "react";
import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";
import { buttonClasses } from "@mui/material";
import { pxToRem } from "@src/utils/styling-utils";

export interface GapDimensions {
  _2px: number;
  _4px: number;
  _8px: number;
  _10px: number;
  _12px: number;
  _16px: number;
  _20px: number;
  _24px: number;
  _32px: number;
  _40px: number;
  _48px: number;
  _56px: number;
  _64px: number;
}

declare module "@mui/material/styles" {
  /**
   * extend palette with new type
   * by adding new field to
   * Palette and PaletteOptions
   */
  interface Palette {
    transparent: string;
  }
  interface PaletteOptions {
    transparent?: string;
  }

  /**
   * extend with new color type
   * by adding new field to
   * PaletteColor and SimplePaletteColorOptions
   */

  interface Theme {
    gaps: GapDimensions;
  }
  interface ThemeOptions {
    gaps?: GapDimensions;
  }
  interface TypographyVariants {
    h2Inactive: React.CSSProperties;
    bodyDefault: React.CSSProperties;
    bodyDefaultInactive: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h2Inactive?: React.CSSProperties;
    bodyDefault?: React.CSSProperties;
    bodyDefaultInactive?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h2Inactive: true;
    bodyDefault: true;
    bodyDefaultInactive: true;
    h1: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    caption: false;
    inherit: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;
    button: false;
  }
}

const createBasicTheme = (options: ThemeOptions): Theme => {
  return createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            ...(options.gaps && { borderRadius: pxToRem(options.gaps._8px) }),
            boxShadow: "none",
            ":hover": {
              boxShadow: "none",
            },
            [`&.${buttonClasses.focusVisible}`]: {
              boxShadow: "none",
            },
          },
          outlined: {
            borderColor: options.palette?.grey?.[300],
            ":hover": {
              borderColor: options.palette?.grey?.[300],
            },
          },
          sizeMedium: {
            height: pxToRem(40),
          },
          sizeLarge: {
            height: pxToRem(44),
            padding: `${pxToRem(10)} ${pxToRem(20)}`,
          },
          startIcon: {
            marginLeft: 0,
          },
        },
      },
    },
    ...options,
  });
};

export { createBasicTheme };
