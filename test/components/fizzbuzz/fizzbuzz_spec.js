import { expect } from 'chai'
import fizzbuzz from '../../../src/components/fizzbuzz/fizzbuzz'

context('unit test fizzbuzz.js', () => {
  function numsExpectedToEq (arr, expected) {
    // loop through the array of nums and make
    // sure they equal what is expected
    arr.forEach((num) => {
      expect(fizzbuzz(num)).to.eq(expected)
    })
  }

  it('returns "fizz" when number is multiple of 3', () => {
    numsExpectedToEq([9, 12, 18], 'fizz')
  })

  it('returns "buzz" when number is multiple of 5', () => {
    numsExpectedToEq([10, 20, 25], 'buzz')
  })

  it('returns "fizzbuzz" when number is multiple of both 3 and 5', () => {
    numsExpectedToEq([15, 30, 60], 'fizzbuzz')
  })

  it('returns "..." when number is not a multiple of 3 or 5', () => {
    numsExpectedToEq([1, 1, 2], '...')
  })
})
