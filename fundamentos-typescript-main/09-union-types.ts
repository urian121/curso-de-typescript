(() => {
  let userId: string | number
  userId = 1212
  userId = '32'

  console.log({ userId })

  function greeting(myText: string | number ) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`)
    } else {
      console.log(`number ${myText.toFixed(2)}`)
    }
  }

  greeting('Hi!')
  greeting(123.23423)
})()
