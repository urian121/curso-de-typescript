(() => {
  let productPrice = 100
  productPrice = 12
  console.log({productPrice})

  let customerAge: number = 21
  customerAge = customerAge + 1
  console.log({customerAge})

  let productInStock: number = 43
  console.log({productInStock})

  if (productInStock > 10) {
    console.log('Is greater')
  }

  let discount = parseInt('100')
  console.log({discount})
  if (discount <= 200) {
    console.log('Apply')
  } else {
    console.log('Not apply')
  }

  let hex = 0xFFF
  console.log({hex})

  let binary = 0b1110
  console.log({binary})

  const octal = 0o277
  console.log({octal})

})()
