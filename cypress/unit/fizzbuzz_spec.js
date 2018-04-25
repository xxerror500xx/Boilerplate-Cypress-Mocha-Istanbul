import fizzbuzz from '../../src/fizzbuzz'

context('unit test fizzbuzz.js', function(){
  function numsExpectedToEq (arr, expected) {
    // loop through the array of nums and make
    // sure they equal what is expected
    arr.forEach((num) => {
      expect(fizzbuzz(num)).to.eq(expected)
    })
  }

  it('returns "fizz" when number is multiple of 3', function(){
    numsExpectedToEq([9, 12, 18], "fizz")
  })

  it('returns "buzz" when number is multiple of 5', function(){
    numsExpectedToEq([10, 20, 25], "buzz")
  })

  it('returns "fizzbuzz" when number is multiple of both 3 and 5', function(){
    numsExpectedToEq([15, 30, 60], "fizzbuzz")
  })
})
