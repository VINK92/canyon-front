import { lightTheme } from './light';
import { mainTheme } from './main';
import { THEMES } from './types';

export enum THEME_NAMES {
  main = 'main',
  light = 'light',
}

export const themes: THEMES = {
  [THEME_NAMES.main]: mainTheme,
  [THEME_NAMES.light]: lightTheme,
};
