(() => {
  // let myNumber: number
  // let myString: string

  let myNull: null = null
  let myUndefined: undefined = undefined

  console.log({ myNull })
  console.log({ myUndefined })

  let myNumber: number | null = null
  myNumber = 12
  console.log({ myNumber })

  function hi(name: string | null) {
    let hello = 'Hola '
    if (name) {
      hello += name
    } else {
      hello += 'nobody'
    }
    console.log(hello)
  }

  function hiV2(name: string | null) {
    let hello = 'Hola '
    hello += name?.toLowerCase() || 'nobody'
    console.log(hello)
  }

  hi('Aldo')
  hi(null)

  hiV2('Aldo')
  hiV2(null)

  function getPetName(petName: string | null) {
    console.log(petName || 'The player has no pets')
  }

  getPetName(null)
  getPetName('Rudy')
})()
