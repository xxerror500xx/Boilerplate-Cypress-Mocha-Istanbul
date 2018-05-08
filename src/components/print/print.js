export var clickNum = 0;
export function getClickNum() {
  return clickNum;
}
export function newClick() {
  clickNum++;
}

export function toLi(fizzor, num, sum, diff, prod, quo) {
  const addExample = ` | Add: ${num} + ${clickNum} = ${sum}`;
  const subExample = ` | Sub: ${num} - ${clickNum} = ${diff}`;
  const mulExample = ` | Mul: ${num} * ${clickNum} = ${prod}`;
  const divExample = ` | Div: ${num} / ${clickNum} = ${quo} |`;
  const arith = addExample + subExample + mulExample + divExample;
  return `<li>${clickNum}[${fizzor}]${arith}</li>`;
}
