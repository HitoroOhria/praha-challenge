import { describe, expect, test } from "@jest/globals";

describe("jest test", () => {
  test("sum", () => {
    expect(1 + 1).toBe(2);
  });
});
