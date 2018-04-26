import { getClickNum, newClick, clickNum, toLi } from './print';
import { add, subtract, multiply, divide } from './math';

function component() {
  var container = document.createElement('div');
  container.innerHTML = '<p>Hello, Cypress!<p>';

  var btnClick = document.createElement('button');
  btnClick.innerHTML = 'Click me!';

  var list = document.createElement('ul');
  list.setAttribute('class', 'list');


  btnClick.addEventListener('click', function () {
    var list = document.getElementsByClassName('list')[0];
    var item = document.createElement('li');
    newClick();
    var num = 3;
    var sum = add(num, getClickNum());
    var difference = subtract(num, getClickNum());
    var product = multiply(num, getClickNum());
    var quotient = divide(num, getClickNum());
    item.innerHTML = toLi(num, sum, difference, product, quotient);
    list.appendChild(item);
  });

  container.appendChild(btnClick);
  container.appendChild(list);

  return container;
}

document.body.appendChild(component());
