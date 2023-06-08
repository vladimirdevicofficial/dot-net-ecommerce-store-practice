import { ReactNode } from 'react';

import { useStyles } from './useStyles';

interface IProductsWrapper {
    children: ReactNode | ReactNode[];
    gap: number;
}

export default function ProductsWrapper({ children, gap }: IProductsWrapper) {
  const { classes } = useStyles({ gap: gap });

  return (
    <div className={classes.productsWrapper}>
      {children}
    </div>
  );
}
