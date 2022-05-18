import { last } from './last'

describe('last()', () => {
  /** Test data */
  const data = [
    { input: [], expectedOutput: undefined },
    { input: [1, 2, 3, 4, 5], expectedOutput: 5 },
    { input: ['these', 'are', 'string', 'values'], expectedOutput: 'values' },
    { 
      input: ['this', null, 1, 'is', true, undefined, 'is', 2, true, null, 'mixed', false, 1, 'array', 1], 
      expectedOutput: 1
    },
  ]

  test.each(data)('returns $expectedOutput for last($input)', ({ input, expectedOutput }) => {
    expect(last(input)).toEqual(expectedOutput)
  })
})