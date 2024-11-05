console.log('Number of categories:', document.querySelectorAll('.item').length)
document.querySelectorAll('.item').forEach((item) => {
  console.log(item.querySelector('h2').textContent)
  console.log('Elements:', item.querySelectorAll('li').length)
})
