import { makeStyles } from '@theme/makeStyles';

export const useStyles = makeStyles<{gap: number}>()((_, props) => {
  return {
    productsWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: props.gap,
      padding: '240px 30px',
      alignSelf: 'end',
    },
  };
});
