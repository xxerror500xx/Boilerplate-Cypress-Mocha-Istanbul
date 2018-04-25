import { add, subtract, divide, multiply } from '../../src/math'

context('unit test math.js', function(){
  it('can add numbers', function(){
    expect(add(1, 2)).to.eq(3)
    expect(add(0.02, 2)).to.eq(2.02)
    expect(add(-3, 2)).to.eq(-1)
  })

  it('can subtract numbers', function(){
    expect(subtract(12, 5)).to.eq(7)
    expect(subtract(12, .01)).to.eq(11.99)
    expect(subtract(5, 12)).to.eq(-7)
  })

  it('can divide numbers', function(){
    expect(divide(27, 9)).to.eq(3)
    expect(divide(27, -9)).to.eq(-3)
    expect(divide(50, .5)).to.eq(100)
  })
  it('can not divide zero', function(){
    expect(divide(1, 0)).to.eq(Infinity)
  })

  it('can muliple numbers', function(){
    expect(multiply(5, 4)).to.eq(20)
    expect(multiply(.5, 2)).to.eq(1)
    expect(multiply(-5, -4)).to.eq(20)
  })
})
