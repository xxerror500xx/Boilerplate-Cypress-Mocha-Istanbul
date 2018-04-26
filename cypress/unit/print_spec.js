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
    expect(toLi(2, 0, 1, 1)).to.eq(`<li>Clicked! 1 | Add: 1 + 1 = 2 | Sub: 1 - 1 = 0 | Mul: 1 * 1 = 1 | Div: 1 / 1 = 1</li>`)
  })
})
