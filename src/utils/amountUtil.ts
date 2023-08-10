export const getFormattedAmount = ({
  amount,
  currency,
  locales = 'tr-TR',
}: {
  amount: number;
  currency: string;
  locales?: string;
}): string =>
  Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
  }).format(amount);
