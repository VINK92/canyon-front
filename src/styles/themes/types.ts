import { Theme } from '@mui/material/styles';
import { THEME_NAMES } from './theme-constants';

export type THEMES = {
  [key in keyof typeof THEME_NAMES]: Theme;
};

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'bodyDefaultBook'
  | 'bodyDefaultItalic'
  | 'bodyDefaultMedium'
  | 'bodyDefaultBookLink'
  | 'bodyDefaultBold'
  | 'bodySmallBook'
  | 'bodySmallMedium'
  | 'bodySmallBold'
  | 'subtitleBook'
  | 'subtitleMedium'
  | 'captionMedium'
  | 'overlineDefaultBold'
  | 'overlineSmallBold'
  | 'buttonLarge'
  | 'buttonMedium'
  | 'buttonSmall';
