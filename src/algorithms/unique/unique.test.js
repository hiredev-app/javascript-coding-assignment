import { unique } from './unique'

describe('unique()', () => {
  /** Test data */
  const data = [
    { input: [], expectedOutput: [] },
    { input: [1, 2, 3, 4, 5], expectedOutput: [1, 2, 3, 4, 5] },
    { input: [1, 2, 3, 2, 1], expectedOutput: [1, 2, 3] },
    { input: ['these', 'are', 'string', 'values'], expectedOutput: ['these', 'are', 'string', 'values'] },
    { input: ['these', 'are', 'string', 'these', 'are', 'values'], expectedOutput: ['these', 'are', 'string', 'values'] },
    { 
      input: ['this', null, 1, 'is', true, undefined, 'is', 2, true, null, 'mixed', false, 1, 'array', 1], 
      expectedOutput: ['this', null, 1, 'is', true, undefined, 2, 'mixed', false, 'array'] 
    },
  ]

  test.each(data)('returns $expectedOutput for unique($input)', ({ input, expectedOutput }) => {
    expect(unique(input)).toEqual(expectedOutput)
  })
})