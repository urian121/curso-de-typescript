(() => {
  let isEnable = true
  isEnable = false

  let isNew: boolean = false
  console.log({ isNew })
  isNew = true
  console.log({ isNew })

  const random = Math.random()
  console.log({ random })

  isNew = random >= 0.5
  console.log({ isNew })
})()
