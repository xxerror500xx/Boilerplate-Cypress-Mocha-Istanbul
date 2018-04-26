export let clickNum = 0;
export function getClickNum() {
  return clickNum;
}
export function newClick() {
  clickNum++;
}

export function toLi(fizzor, num, sum, diff, prod, quo) {
  let addExample = " | Add: " + num + " + " + clickNum + " = " + sum;
  let subExample = " | Sub: " + num + " - " + clickNum + " = " + diff;
  let mulExample = " | Mul: " + num + " * " + clickNum + " = " + prod;
  let divExample = " | Div: " + num + " / " + clickNum + " = " + quo + ` |`;
  let arith = addExample + subExample + mulExample + divExample;
  return `<li>` + clickNum + '[' + fizzor + ']'+ arith +`</li>`;
}
