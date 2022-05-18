import { fizzBuzz } from './fizzBuzz'

describe('fizzBuzz()', () => {
  /** Test data */
  const data = [
    { input: -100, expectedOutput: [] },
    { input: 0, expectedOutput: [] },
    { input: 5, expectedOutput: [1, 2, 'Fizz', 4, 'Buzz'] },
    { input: 15, expectedOutput: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz' ] },
  ]

  test.each(data)('returns $expectedOutput for fizzbuzz($input)', ({ input, expectedOutput }) => {
    expect(fizzBuzz(input)).toEqual(expectedOutput)
  })
})