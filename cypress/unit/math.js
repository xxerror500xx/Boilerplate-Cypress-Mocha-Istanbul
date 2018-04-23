import { add, subtract, divide, multiply } from '../../src/math'

context('unit test math.js', function(){
  it('can add numbers', function(){
    expect(add(1, 2)).to.eq(3)
  })

  it('can subtract numbers', function(){
    expect(subtract(5, 12)).to.eq(-7)
  })

  it('can divide numbers', function(){
    expect(divide(27, 9)).to.eq(3)
  })

  it('can muliple numbers', function(){
    expect(multiply(5, 4)).to.eq(20)
  })
})
