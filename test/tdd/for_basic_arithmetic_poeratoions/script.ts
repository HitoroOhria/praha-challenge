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
    case "multiply":
      return multiply(...numbers);
    default:
      return 0;
  }
};

const add = (...numbers: number[]): number | string => {
  const result = numbers.reduce((pre, cur) => pre + cur);

  return checkBigNumber(result);
};

const divide = (...numbers: number[]): number | string => {
  const result = numbers.reduce((pre, cur) => pre - cur);

  return checkNegativeNumber(result);
};

const multiply = (...numbers: number[]): number | string => {
  const result = numbers.reduce((pre, cur) => pre * cur);

  return checkBigNumber(result);
};

const checkBigNumber = (num: number): number | string => {
  return num > 1000 ? "big big number" : num;
};

const checkNegativeNumber = (num: number): number | string => {
  return num < 0 ? "negative number" : num;
};
