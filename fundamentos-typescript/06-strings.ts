(() => {
  let productTitle = 'My amazing product'
  productTitle = 'My amazing product changed'
  console.log({ productTitle })

  const productDescription = "My amazing product description"
  console.log({ productDescription })

  let productPrice = 100
  let isNew: boolean = false

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNeW: ${isNew}
  `
  console.log(summary)

  const myString: string = ''
})()
