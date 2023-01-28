import {describe, expect, test} from '@jest/globals';

test('Async test', async () => {
  const asyncFunc = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("result")
      }, 300)
    })
  }

  const result = await asyncFunc()

  expect(result).toBe("result")
})
