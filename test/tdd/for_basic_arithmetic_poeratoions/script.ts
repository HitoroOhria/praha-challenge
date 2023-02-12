type CalculationKind = "add" | "subtract" | "multiply" | "divide";

export const calculate = (
  kind: CalculationKind,
  ...numbers: number[]
): number | string => {
  const result = numbers.reduce((pre, cur) => pre + cur, 0);

  return result > 1000 ? "big big number" : result;
};
