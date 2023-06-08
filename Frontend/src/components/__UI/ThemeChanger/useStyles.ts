import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles({ name: 'ThemeChanger' })(() => {
  return {
    themeChanger: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      '& span': {
        fontSize: 12,
        color: 'var(--foreground)',
        transition: 'color 0.4s ease-in-out',
      },

    },
    buttonsContainer: {
      display: 'flex',
      gap: 5,
      alignItems: 'center',
      '& button': {
        maxWidth: 'fit-content',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontSize: 10,
        padding: '3px 10px',
        borderRadius: 3,
        transition: 'background 0.4s ease-in-out, color 0.4s ease-in-out',
      },
    },
  };
});
