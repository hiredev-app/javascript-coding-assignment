import { duplicate } from './duplicate'

describe('duplicate()', () => {
  /** Test data */
  const data = [
    { input: [], expectedOutput: [] },
    { input: [1, 2, 3, 4, 5], expectedOutput: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] },
    { input: ['these', 'are', 'string', 'values'], expectedOutput: ['these', 'are', 'string', 'values', 'these', 'are', 'string', 'values'] },
    { 
      input: ['this', null, 1, 'is', true, undefined, 'is', 2, true, null, 'mixed', false, 1, 'array', 1], 
      expectedOutput: ['this', null, 1, 'is', true, undefined, 'is', 2, true, null, 'mixed', false, 1, 'array', 1, 'this', null, 1, 'is', true, undefined, 'is', 2, true, null, 'mixed', false, 1, 'array', 1] 
    },
  ]

  test.each(data)('returns $expectedOutput for duplicate($input)', ({ input, expectedOutput }) => {
    expect(duplicate(input)).toEqual(expectedOutput)
  })
})