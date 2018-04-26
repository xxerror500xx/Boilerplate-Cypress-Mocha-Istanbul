import { getClickNum, newClick, clickNum, toLi } from './print';
import { add, subtract, multiply, divide } from './math';
import fizzbuzz from './fizzbuzz';

function component() {
  var container = document.createElement('div');
  container.innerHTML = '<p>Hello, Cypress!<p>';

  var btnClick = document.createElement('button');
  btnClick.innerHTML = 'Click me!';

  var list = document.createElement('ul');
  list.setAttribute('class', 'list');


  btnClick.addEventListener('click', function () {
    newClick();
    // var list = document.getElementsByClassName('list')[0];
    var item = document.createElement('li');

    var num = 3;
    var numClicked = getClickNum();
    var fizzor = fizzbuzz(numClicked);
    var sum = add(num, numClicked);
    var difference = subtract(num, numClicked);
    var product = multiply(num, numClicked);
    var quotient = divide(num, numClicked);
    item.innerHTML = toLi(fizzor, num, sum, difference, product, quotient);
    list.appendChild(item);
  });

  container.appendChild(btnClick);
  container.appendChild(list);

  return container;
}

document.body.appendChild(component());
