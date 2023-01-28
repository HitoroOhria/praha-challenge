import {afterAll, afterEach, beforeAll, beforeEach, describe, expect, test} from '@jest/globals';

beforeAll(() => console.log('only execute once at the beginning of this file'));
beforeEach(() => console.log('execute before each test'));
afterEach(() => console.log('execute aflter each test'));
afterAll(() => console.log('only execute once at the end of this file'));

test('Run setup and Teardown', () => {
  expect(true).toBeTruthy()
})