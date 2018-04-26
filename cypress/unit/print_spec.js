import {getClickNum, newClick, clickNum, toLi} from '../../src/print'

context('unit test print.js', function(){
  it('should return current number times clicked', function(){
    expect(getClickNum()).to.eq(0)
  })
  it('should increment current number times clicked', function(){
    newClick()
    expect(getClickNum()).to.eq(1)
  })
  it('return a specific string', function(){
    var num = 3;
    var fizzor = '...'
    var sum = 4;
    var diff = 2;
    var prod = 3;
    var quo = 3;
    expect(toLi(fizzor, num, sum, diff, prod, quo)).to.eq(`<li>1[...] | Add: 3 + 1 = 4 | Sub: 3 - 1 = 2 | Mul: 3 * 1 = 3 | Div: 3 / 1 = 3 |</li>`)
  })
})
