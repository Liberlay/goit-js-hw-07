const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

input.addEventListener('input', (e) => {
  const value = e.target.value.trim()
  span.textContent = value ? value : 'Anonymous'
})
