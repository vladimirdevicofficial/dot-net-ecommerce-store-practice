import { renameKey } from '@utils/index';

type Color = Record<string, string>

export const colors: Color = {
  white: '#ffffff',
  black: '#000000',
  borderLight: 'rgba(127,127,127,0.4)',
  borderDark: 'rgba(127,127,127,0.4)',
};

export const lightThemeColors: Color = {
  foreground: colors.black,
  background: colors.white,
  border: colors.borderLight,
};

export const darkThemeColor: Color = {
  foreground: colors.white,
  background: colors.black,
  border: colors.borderDark,
};

export const createColorVars = () => {
  let object: Color = lightThemeColors;

  Object.keys(lightThemeColors)
    ?.forEach((key) => {
      object = renameKey(object, key, `--${key}`);
    });
  return { ':root': { ...object } };
};

export const createDataThemeDarkColors = () => {
  let object: Color = darkThemeColor;

  Object.keys(lightThemeColors)
    ?.forEach((key) => {
      object = renameKey(object, key, `--${key}`);
    });
  return { '[data-theme="dark"]': { ...object } };
};
