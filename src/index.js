import toLi from './print.js';

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
    item.innerHTML = toLi();
    list.appendChild(item);
  });

  container.appendChild(btnClick);
  container.appendChild(list);

  return container;
}

document.body.appendChild(component());
