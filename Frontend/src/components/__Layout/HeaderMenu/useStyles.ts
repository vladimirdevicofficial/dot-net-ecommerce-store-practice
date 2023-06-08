import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles({ name: 'HeaderMenu' })(() => {
  return {
    headerMenu: {
      display: 'flex',
      gap: 10,
      '& a': {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'var(--foreground)',
        textDecoration: 'none',
      },
      '& a:hover': {
        textDecoration: 'underline',
        textDecorationColor: 'var(--foreground)',
      },
    },
  };
});
