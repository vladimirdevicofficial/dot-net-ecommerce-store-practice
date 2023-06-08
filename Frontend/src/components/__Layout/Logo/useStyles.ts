import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles({ name: 'Logo' })(() => {
  return {
    logo: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'var(--foreground)',
      '& h2': {
        fontSize: 24,
        margin: 0,
        '& sup': {
          fontSize: 16,
          marginLeft: 5,
        },
      },
    },
  };
});
