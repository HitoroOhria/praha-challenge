import { describe, expect, test } from "@jest/globals";
import { calculate } from "./script";

describe("jest test", () => {
  test("sum", () => {
    expect(1 + 1).toBe(2);
  });
});

describe("calculate", () => {
  describe("common", () => {
    test("'1' を渡すと、エラーを返す", () => {
      expect(() => calculate("add", "1")).toThrow(/integer is required/);
    });

    test("1 と '1' を渡すと、エラーを返す", () => {
      expect(() => calculate("add", 1, "1")).toThrow(/integer is required/);
    });

    test("3.3 を渡すと、エラーを返す", () => {
      expect(() => calculate("add", 3.3)).toThrow(/integer is required/);
    });

    test("1 と 3.3 を渡すと、エラーを返す", () => {
      expect(() => calculate("add", 1, 3.3)).toThrow(/integer is required/);
    });

    test("31個 以上の値を渡すと、エラーを返す", () => {
      const numbers = [...Array(31)].map((_, i) => i + 1);

      expect(() => calculate("add", ...numbers)).toThrow(/too many args/);
    });
  });

  describe("add", () => {
    test("0 を渡すと、0 が返る", () => {
      expect(calculate("add", 0)).toBe(0);
    });

    test("0 と 0 を渡すと、0 が返る", () => {
      expect(calculate("add", 0, 0)).toBe(0);
    });

    test("0 と 1 を渡すと、1 が返る", () => {
      expect(calculate("add", 0, 1)).toBe(1);
    });

    test("1 と 0 を渡すと、1 が返る", () => {
      expect(calculate("add", 1, 0)).toBe(1);
    });

    test("1 と 1 を渡すと、1 が返る", () => {
      expect(calculate("add", 1, 1)).toBe(2);
    });

    test("1 と 1 と 1 を渡すと、3 が返る", () => {
      expect(calculate("add", 1, 1, 1)).toBe(3);
    });

    test("1 ~ 30 まで 30個 の数値を渡すと、465 が返る", () => {
      const numbers = [...Array(30)].map((_, i) => i + 1);

      expect(calculate("add", ...numbers)).toBe(465);
    });

    test("999 と 1 を渡すと、1000 が返る", () => {
      expect(calculate("add", 999, 1)).toBe(1000);
    });

    test("1000 と 1 を渡すと、big big number が返る", () => {
      expect(calculate("add", 1000, 1)).toBe("big big number");
    });
  });

  describe("subtract", () => {
    test("0 を渡すと、0 が返る", () => {
      expect(calculate("subtract", 0)).toBe(0);
    });

    test("0 と 0 を渡すと、0 が返る", () => {
      expect(calculate("subtract", 0, 0)).toBe(0);
    });

    test("0 と 1 を渡すと、negative number が返る", () => {
      expect(calculate("subtract", 0, 1)).toBe("negative number");
    });

    test("1 と 0 を渡すと、1 が返る", () => {
      expect(calculate("subtract", 1, 0)).toBe(1);
    });

    test("1 と 1 を渡すと、0 が返る", () => {
      expect(calculate("subtract", 1, 1)).toBe(0);
    });

    test("3 と 1 と 1 を渡すと、1 が返る", () => {
      expect(calculate("subtract", 3, 1, 1)).toBe(1);
    });

    test("1 ~ 30 まで 30個 の数値を渡すと、negative number が返る", () => {
      const numbers = [...Array(30)].map((_, i) => i + 1);

      expect(calculate("subtract", ...numbers)).toBe("negative number");
    });

    test("1001 と 1 を渡すと、1000 が返る", () => {
      expect(calculate("subtract", 1001, 1)).toBe(1000);
    });

    test("1002 と 1 を渡すと、1001 が返る", () => {
      expect(calculate("subtract", 1002, 1)).toBe(1001);
    });
  });

  describe("multiply", () => {
    test("0 を渡すと、0 が返る", () => {
      expect(calculate("multiply", 0)).toBe(0);
    });

    test("0 と 0 を渡すと、0 が返る", () => {
      expect(calculate("multiply", 0, 0)).toBe(0);
    });

    test("0 と 1 を渡すと、0 が返る", () => {
      expect(calculate("multiply", 0, 1)).toBe(0);
    });

    test("1 と 0 を渡すと、0 が返る", () => {
      expect(calculate("multiply", 1, 0)).toBe(0);
    });

    test("1 と 1 を渡すと、1 が返る", () => {
      expect(calculate("multiply", 1, 1)).toBe(1);
    });

    test("2 と 2 を渡すと、4 が返る", () => {
      expect(calculate("multiply", 2, 2)).toBe(4);
    });

    test("2 と 2 と 2 を渡すと、8 が返る", () => {
      expect(calculate("multiply", 2, 2, 2)).toBe(8);
    });

    test("1 ~ 30 まで 30個 の数値を渡すと、negative number が返る", () => {
      const numbers = [...Array(30)].map((_, i) => i + 1);

      expect(calculate("multiply", ...numbers)).toBe("big big number");
    });
    //
    test("1000 と 1 を渡すと、1000 が返る", () => {
      expect(calculate("multiply", 1000, 1)).toBe(1000);
    });

    test("1001 と 1 を渡すと、1001 が返る", () => {
      expect(calculate("multiply", 1001, 1)).toBe("big big number");
    });
  });

  describe("divide", () => {
    test("0 を渡すと、0 が返る", () => {
      expect(calculate("divide", 0)).toBe(0);
    });

    test("0 と 0 を渡すと、divided by zero が返る", () => {
      expect(calculate("divide", 0, 0)).toBe("divided by zero");
    });

    test("0 と 1 を渡すと、0 が返る", () => {
      expect(calculate("divide", 0, 1)).toBe(0);
    });

    test("1 と 0 を渡すと、divided by zero が返る", () => {
      expect(calculate("divide", 1, 0)).toBe("divided by zero");
    });

    test("1 と 1 を渡すと、1 が返る", () => {
      expect(calculate("divide", 1, 1)).toBe(1);
    });

    test("5 と 2 を渡すと、2.5 が返る", () => {
      expect(calculate("divide", 5, 2)).toBe(2.5);
    });

    test("10 と 3 を渡すと、3.333333 が返る", () => {
      expect(calculate("divide", 10, 3)).toBe(3.333333);
    });

    test("20 と 2 と 3 を渡すと、3.333333 が返る", () => {
      expect(calculate("divide", 20, 2, 3)).toBe(3.333333);
    });

    test("1 ~ 30 まで 30個 の数値を渡すと、0 が返る", () => {
      const numbers = [...Array(30)].map((_, i) => i + 1);

      expect(calculate("divide", ...numbers)).toBe(0);
    });

    test("1000 と 1 を渡すと、1000 が返る", () => {
      expect(calculate("divide", 1000, 1)).toBe(1000);
    });

    test("1001 と 1 を渡すと、1001 が返る", () => {
      expect(calculate("divide", 1001, 1)).toBe(1001);
    });
  });
});
