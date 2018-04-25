import toLi from '../../src/print'

context('unit test print.js', function(){
  it('return a specific string', function(){
    expect(toLi()).to.eq(`<li><span>Clicked! 1</span></li>`)
  })
})
