export var clickNum = 0;
export function getClickNum() {
  return clickNum;
}
export function newClick() {
  clickNum++;
}

export function toLi(fizzor, num, sum, diff, prod, quo) {
  var addExample = " | Add: " + num + " + " + clickNum + " = " + sum;
  var subExample = " | Sub: " + num + " - " + clickNum + " = " + diff;
  var mulExample = " | Mul: " + num + " * " + clickNum + " = " + prod;
  var divExample = " | Div: " + num + " / " + clickNum + " = " + quo + ' |';
  var arith = addExample + subExample + mulExample + divExample;
  return '<li>' + clickNum + '[' + fizzor + ']'+ arith +'</li>';
}
