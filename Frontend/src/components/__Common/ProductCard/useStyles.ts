import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles<{gap: number}>({ name: 'ProductCard' })((_, props) => {
  return {
    productCard: {
      width: `calc(100% / 3 - ${props.gap}px)`,
      display: 'flex',
      gap: 3,
      flexDirection: 'column',
      border: '1px solid var(--border)',
      color: 'var(--foreground)',
      transition: 'color 0.4s ease-in-out',
      padding: 10,
      borderRadius: 10,
    },
    image: {
      width: '100%',
      overflow: 'hidden',
      borderRadius: 5,
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
    name: {
      fontSize: 20,
      fontWeight: 800,
    },
  };
});
