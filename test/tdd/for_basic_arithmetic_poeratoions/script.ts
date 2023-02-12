type CalculationKind = "add" | "subtract" | "multiply" | "divide";

export const calculate = (
  kind: CalculationKind,
  ...numbers: number[]
): number | string => {
  switch (kind) {
    case "add":
      return add(...numbers);
    case "divide":
      return divide(...numbers);
    default:
      return 0;
  }
};

const add = (...numbers: number[]): number | string => {
  const result = numbers.reduce((pre, cur) => pre + cur);

  return result > 1000 ? "big big number" : result;
};

const divide = (...numbers: number[]): number | string => {
  const result = numbers.reduce((pre, cur) => pre - cur);

  return result < 0 ? "negative number" : result;
};
