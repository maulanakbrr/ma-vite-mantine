export const formatToIDR = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
};

export const formatToIDRShort = (value: number): string => {
  if (isNaN(value)) return 'Rp. 0';

  const million = 1_000_000;
  const result = value / million;

  // Remove trailing zeros (e.g. 4.0 → 4)
  let formatted = result.toString();
  
  // But keep decimal if non-zero (e.g. 3.5, 4.599)
  if (!Number.isInteger(result)) {
    // Keep up to 3 decimals like your 4.599 example
    formatted = result.toFixed(3).replace(/\.?0+$/, '');
  }

  return `Rp. ${formatted} Mio`;
};