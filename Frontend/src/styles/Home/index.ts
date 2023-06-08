import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles()((/* theme */) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      minHeight: '100vh',
      maxWidth: '100%',
      background: 'var(--background)',
      transition: 'background 0.4s ease-in-out',
      color: 'black',
    },
    title: {},
  };
});
