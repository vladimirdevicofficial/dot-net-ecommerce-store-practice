import { formatPrice } from '@utils/Numbers/formatPrice';

import { IProductCard } from './IProductCard';
import { useStyles } from './useStyles';

export default function ProductCard({ product, gap }: IProductCard) {
  const { classes } = useStyles({ gap: gap });
  const currency = 'eur';
  const formattedPrice = formatPrice(product.price, currency);

  return (
    <div id={product.id} className={classes.productCard}>
      <div className={classes.image}>
        <img src={product.pictureUrl} alt={product.description} loading="lazy"/>
      </div>
      <div>id: {product.id}</div>
      <div className={classes.name}>name: {product.name}</div>
      <div>description: {product.description}</div>
      <div>type: {product.type}</div>
      <div>brand: {product.brand}</div>
      <div>price: {formattedPrice}</div>
    </div>
  );
}
