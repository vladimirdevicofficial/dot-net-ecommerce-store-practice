import { useTheme } from 'next-themes';

import { useStyles } from './useStyles';

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  const { classes } = useStyles();

  return (
    <div className={classes.themeChanger}>
      <span>Theme</span>
      <div className={classes.buttonsContainer}>
        <button type="button" onClick={() => setTheme('light')}>Light</button>
        <span role="separator" aria-orientation="vertical">/</span>
        <button type="button" onClick={() => setTheme('dark')}>Dark</button>
      </div>

    </div>
  );
}
