import { getClickNum, newClick, toLi } from './components/print/print'
import { add, subtract, multiply, divide } from './components/math/math'
import fizzbuzz from './components/fizzbuzz/fizzbuzz'

function component () {
  const container = document.createElement('div')
  container.innerHTML = '<p>Hello, Cypress!<p>'

  const text = document.createElement('div')
  text.innerHTML = '<p>This is a "Hello Cypress", fizzbuzz, math, code example that uses modules and includes integration as well as unit tests.</p>'

  const btnClick = document.createElement('button')
  btnClick.innerHTML = 'Click me!'

  const list = document.createElement('ul')
  list.setAttribute('class', 'list')

  btnClick.addEventListener('click', () => {
    newClick()
    const item = document.createElement('li')

    const num = 3
    const numClicked = getClickNum()
    const fizzor = fizzbuzz(numClicked)

    const sum = add(num, numClicked)
    const difference = subtract(num, numClicked)
    const product = multiply(num, numClicked)
    const quotient = divide(num, numClicked)

    item.innerHTML = toLi(fizzor, num, sum, difference, product, quotient)
    list.appendChild(item)
  })

  container.appendChild(text)
  container.appendChild(btnClick)
  container.appendChild(list)

  return container
}

document.body.appendChild(component())
