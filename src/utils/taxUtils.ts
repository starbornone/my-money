interface TaxBracket {
  lower_bound: number;
  upper_bound?: number | null;
  base_tax: number;
  marginal_rate: number;
  medicare_levy?: number;
}

export const calculateTax = (
  amount: number,
  taxBrackets: TaxBracket[]
): number => {
  let tax = 0;

  for (const bracket of taxBrackets) {
    if (
      amount >= bracket.lower_bound &&
      (bracket.upper_bound === null || amount <= bracket.upper_bound)
    ) {
      const taxableIncome = amount - bracket.lower_bound;
      tax = bracket.base_tax + taxableIncome * bracket.marginal_rate;

      const medicareLevy = 0.02 * amount;
      tax += medicareLevy;
      break;
    }
  }

  return tax;
};
