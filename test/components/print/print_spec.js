import { expect } from 'chai';
import { getClickNum, newClick, toLi } from '../../../src/components/print/print';

context('unit test print.js', () => {
  it('should return current number times clicked', () => {
    expect(getClickNum()).to.eq(0);
  });
  it('should increment current number times clicked', () => {
    newClick();
    expect(getClickNum()).to.eq(1);
  });
  it('return a specific string', () => {
    const num = 3;
    const fizzor = '...';
    const sum = 4;
    const diff = 2;
    const prod = 3;
    const quo = 3;
    expect(toLi(fizzor, num, sum, diff, prod, quo)).to.eq('<li>1[...] | Add: 3 + 1 = 4 | Sub: 3 - 1 = 2 | Mul: 3 * 1 = 3 | Div: 3 / 1 = 3 |</li>');
  });
});
