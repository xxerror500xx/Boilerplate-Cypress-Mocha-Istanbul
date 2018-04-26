export let clickNum = 0;
export function getClickNum() {
  return clickNum;
}
export function newClick() {
  clickNum++;
}

export function toLi(sum, diff, prod, quo) {
  let addExample = " | Add: " + clickNum + " + " + clickNum + " = " + sum;
  let subExample = " | Sub: " + clickNum + " - " + clickNum + " = " + diff;
  let mulExample = " | Mul: " + clickNum + " * " + clickNum + " = " + prod;
  let divExample = " | Div: " + clickNum + " / " + clickNum + " = " + quo;
  return `<li>Clicked! ` + clickNum + addExample + subExample + mulExample + divExample +`</li>`;
}
