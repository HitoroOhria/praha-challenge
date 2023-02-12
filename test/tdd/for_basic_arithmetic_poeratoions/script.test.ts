import { describe, expect, test } from "@jest/globals";
import { calculate } from "./script";

describe("jest test", () => {
  test("sum", () => {
    expect(1 + 1).toBe(2);
  });
});

describe("calculate", () => {
  describe("add", () => {
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

    test("999 と 1 を渡すと、1000 が返る", () => {
      expect(calculate("add", 999, 1)).toBe(1000);
    });

    test("1000 と 1 を渡すと、big big number が返る", () => {
      expect(calculate("add", 1000, 1)).toBe("big big number");
    });

    test("1 ~ 30 まで 30個 の数値を渡すと、465 が返る", () => {
      const numbers = [...Array(30)].map((_, i) => i + 1);

      expect(calculate("add", ...numbers)).toBe(465);
    });
  });
});
