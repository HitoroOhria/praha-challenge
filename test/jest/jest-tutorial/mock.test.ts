import {jest, describe, expect, test} from '@jest/globals';
import axios, {AxiosPromise} from "axios";

describe('mock object', () => {
  const forEach = (items: any[], callback: (any) => void) => {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

  test('mock', () => {
    const mockCallback = jest.fn(x => 42 + x);

    forEach([1, 2], mockCallback);

    // mock.calls に呼び出し時の情報が格納される
    expect(mockCallback.mock.calls).toHaveLength(2);

    // mock.calls[呼び出し回数のindex][引数のindex]
    expect(mockCallback.mock.calls[0][0]).toBe(1);
    expect(mockCallback.mock.calls[1][0]).toBe(2);

    // mock.results に戻り値が格納される
    expect(mockCallback.mock.results).toHaveLength(2);

    // mock.results[呼び出し回数のindex]
    expect(mockCallback.mock.results[0].value).toBe(43);
    expect(mockCallback.mock.results[1].value).toBe(44);
  })
})

describe('mock return value', () => {
  test('mock return value', () => {
    const returnValueMock = jest.fn()

    returnValueMock.mockReturnValue("mocked value")

    expect(returnValueMock()).toBe("mocked value")
  })

  test('mock return value', () => {
    const returnValueMock = jest.fn()

    returnValueMock.mockReturnValueOnce(1).mockReturnValueOnce("two").mockReturnValue("default")

    expect(returnValueMock()).toBe(1)
    expect(returnValueMock()).toBe("two")
    expect(returnValueMock()).toBe("default")
    expect(returnValueMock()).toBe("default")
  })
})

describe('mock module', () => {
  const callApi = () => {
    return axios.get("https://example.com").then((res) => res.data)
  }

  jest.mock('axios')

  test.skip('mock axios', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>
    // FIXME Type Error
    mockedAxios.get.mockResolvedValue({data: "test"})

    const res = await callApi()

    expect(res).toEqual({data: 'test'})
  })

})