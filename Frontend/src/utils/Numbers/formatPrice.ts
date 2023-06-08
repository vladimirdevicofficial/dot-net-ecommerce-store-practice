export function formatPrice(price: number, currency: string): string {
  let formattedPrice: string;

  switch (currency) {
  case 'usd':
  case 'cad':
    formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(price / 100);
    break;
  case 'eur':
    formattedPrice = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(price / 100);
    break;
  case 'gbp':
    formattedPrice = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(price / 100);
    break;
  case 'jpy':
    formattedPrice = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: currency.toUpperCase(),
      currencyDisplay: 'symbol',
    }).format(price);
    break;
  default:
    formattedPrice = price.toString();
    break;
  }

  return formattedPrice;
}
