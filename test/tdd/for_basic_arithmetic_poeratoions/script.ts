type CalculationKind = "add" | "subtract" | "multiply" | "divide";

export const calculate = (
  kind: CalculationKind,
  ...args: any[]
): number | string => {
  if (args.length > 30) {
    throw new Error("too many args");
  }

  args.forEach((num) => {
    if (typeof num !== "number") {
      throw new Error("integer is required");
    }

    if (!Number.isInteger(num)) {
      throw new Error("integer is required");
    }
  });

  switch (kind) {
    case "add":
      return add(...args);
    case "subtract":
      return subtract(...args);
    case "multiply":
      return multiply(...args);
    case "divide":
      return divide(...args);
    default:
      return 0;
  }
};

const add = (...numbers: number[]): number | string => {
  const result = numbers.reduce((pre, cur) => pre + cur);

  return checkBigNumber(result);
};

const subtract = (...numbers: number[]): number | string => {
  const result = numbers.reduce((pre, cur) => pre - cur);

  return checkNegativeNumber(result);
};

const multiply = (...numbers: number[]): number | string => {
  const result = numbers.reduce((pre, cur) => pre * cur);

  return checkBigNumber(result);
};

const divideDigits = 6;

const divide = (...numbers: number[]): number | string => {
  const result = numbers.reduce((pre, cur) => pre / cur);
  const rounded = round(result, divideDigits);

  return checkDividedZero(rounded);
};

const round = (num: number, digits: number): number => {
  const base = [...Array(divideDigits)].reduce((pre) => pre * 10, 1);

  return Math.round(num * base) / base;
};

const checkBigNumber = (num: number): number | string => {
  return num > 1000 ? "big big number" : num;
};

const checkNegativeNumber = (num: number): number | string => {
  return num < 0 ? "negative number" : num;
};

const checkDividedZero = (num: number): number | string => {
  return isNaN(num) || !isFinite(num) ? "divided by zero" : num;
};
