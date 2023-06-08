import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles({ name: 'Header' })(() => {
  return {

    headerRoot: {
      width: '100%',
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      position: 'fixed',
      top: 0,
      left: 0,
      paddingTop: 24,
      transition: 'background 0.4s ease-in-out',
      borderBottom: '1px solid rgba(127,127,127,0.5)',
    },

    innerHeader: {
      padding: '10px 20px',
      display: 'flex',
    },
  };
});
