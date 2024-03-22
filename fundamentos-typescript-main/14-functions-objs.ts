(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password)
  }

  login({
    email: 'test@mail.com',
    password: 123543
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = []

  const addProducts = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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
  console.log(products)

  const user = {
    email: 'me@mail.com',
    password: 89032893 
  }

  login(user)
})()
