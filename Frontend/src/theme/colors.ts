import { renameKey } from '@utils/index';

type Color = Record<string, string>

export const colors: Color = {
  white: '#ffffff',
  black: '#000000',
  disabled: '#909090',
  secondaryBlack: '#333333',
  focusLight: 'red',
  focusDark: 'orange',
  unfocusedThumbnailsLight: 'rgba(255,255,255,0.6)',
  unfocusedThumbnailsDark: 'rgba(0,0,0,0.6)',
};

export const lightThemeColors: Color = {
  fg: colors.black,
  bg: colors.white,
  ot: colors.unfocusedThumbnailsLight,
  fc: colors.focusLight,
};

export const darkThemeColor: Color = {
  fg: colors.white,
  bg: colors.black,
  ot: colors.unfocusedThumbnailsDark,
  fc: colors.focusDark,
};

export const createColorVars = () => {
  let object: Color = lightThemeColors;

  Object.keys(lightThemeColors)
    .forEach((key) => {
      object = renameKey(object, key, `--${key}`);
    });
  return { ':root': { ...object } };
};

export const createDataThemeDarkColors = () => {
  let object: Color = darkThemeColor;

  Object.keys(lightThemeColors)
    .forEach((key) => {
      object = renameKey(object, key, `--${key}`);
    });
  return { '[data-theme="dark"]': { ...object } };
};
