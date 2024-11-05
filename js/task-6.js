const controls = document.querySelector('#controls')
const input = document.querySelector('input')
const createBtn = controls.querySelector('[data-create]')
const destroyBtn = controls.querySelector('[data-destroy]')
const container = document.querySelector('#boxes')

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

const createBoxes = (amount) => {
  const boxes = []
  let size = 30

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div')
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.backgroundColor = getRandomHexColor()
    box.style.margin = '5px'

    boxes.push(box)
    size += 10
  }

  container.append(...boxes)
}

const destroyBoxes = () => (container.innerHTML = '')

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value, 10)

  amount >= 1 && amount <= 100
    ? (createBoxes(amount), (input.value = ''))
    : alert('Please enter a number between 1 and 100')
})

destroyBtn.addEventListener('click', destroyBoxes)
