(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0
    prices.forEach(item => {
      total += item
    })

    return total.toString()
  }

  const printTotal = (prices: number[]): void => {
    const response = calcTotal(prices)
    console.log(`El total es ${response}`)
  }

  printTotal([1, 2, 3, 4, 5])
})()
