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
    var sum = add(getClickNum(), getClickNum());
    var difference = subtract(getClickNum(), getClickNum());
    var product = multiply(getClickNum(), getClickNum());
    var quotient = divide(getClickNum(), getClickNum());
    item.innerHTML = toLi(sum, difference, product, quotient);
    list.appendChild(item);
  });

  container.appendChild(btnClick);
  container.appendChild(list);

  return container;
}

document.body.appendChild(component());
