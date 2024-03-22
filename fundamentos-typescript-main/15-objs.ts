(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = []

  const addProducts = (data: Product) => {
    products.push(data)
  }

  addProducts({
    title: 'Producto 1',
    createdAt: new Date(),
    stock: 12
  })

  addProducts({
    title: 'Producto 2',
    createdAt: new Date(),
    stock: 4,
    size: 'M'
  })

  products.push({
    title: 'Product 3',
    createdAt: new Date(),
    stock: 20
  })

  console.log(products)
})()
