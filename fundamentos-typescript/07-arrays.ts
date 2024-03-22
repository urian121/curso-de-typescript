(() => {
  let prices = [12, 654, 123, 75, 89]
  // prices.push('asd')
  // prices.push(true)
  // prices.push({})
  prices.push(23)

  let products = ['Hola', true]
  products.push(false)

  let mixed: (number | string | boolean | Object)[] = ['Texto', false]
  mixed.push(12)
  mixed.push('String')
  mixed.push(true)
  mixed.push({})
  mixed.push([])

  let numbers = [1, 2, 3, 4, 5]
  let newNumbers = numbers.map(item => item * 2)
  console.log(newNumbers)
})
