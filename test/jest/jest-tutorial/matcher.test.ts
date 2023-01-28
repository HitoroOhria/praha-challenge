import {describe, expect, test} from '@jest/globals';

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;

  expect(data).toStrictEqual({one: 1, two: 2});
})

test('Truthy/Falsy value', () => {
  expect(null).toBeNull();
  expect(undefined).not.toBeNull();

  expect(null).not.toBeUndefined();
  expect(undefined).toBeUndefined();

  expect(null).toBeFalsy();
  expect(0).toBeFalsy();
})

test('Number', () => {
  // Number では同じ
  expect(5).toBe(5);
  expect(5).toEqual(5);

  expect(5).toBeGreaterThan(4);
  expect(5).toBeGreaterThanOrEqual(5);
  expect(5).toBeLessThan(6);
  expect(5).toBeLessThanOrEqual(5);

  // 丸め誤差の影響を回避する
  expect(0.1 + 0.2).toBeCloseTo(0.3);
})

test('Regex pattern', () => {
  expect('team').toMatch(/ea/);
  expect('team').not.toMatch(/I/);
})

test('Array', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
})

test('Exception', () => {
  const throwError = () => {
    throw new Error('error message');
  }

  expect(() => throwError()).toThrow();
  expect(() => throwError()).toThrow(Error);

  // エラーメッセージのテスト
  expect(() => throwError()).toThrow('error message');
  expect(() => throwError()).toThrow(/or me/);
})
