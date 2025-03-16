
/**
 * Format a number as currency
 */
export const formatCurrency = (value: number, currency = 'USD'): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: value > 100 ? 0 : 2,
    maximumFractionDigits: value > 100 ? 2 : value > 0.01 ? 4 : 8,
  });
  
  return formatter.format(value);
};

/**
 * Format a number as percentage
 */
export const formatPercentage = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  return formatter.format(value / 100);
};

/**
 * Format a number with thousand separators
 */
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};
