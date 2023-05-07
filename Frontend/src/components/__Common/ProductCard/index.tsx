import { IProductCard } from './IProductCard';

export default function ProductCard({ name, price }: IProductCard) {
  return (
    <div>
          C-ProductCard
      <h5>{name}</h5>
      <span>{price}</span>
    </div>
  );
}
