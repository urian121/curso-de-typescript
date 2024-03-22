(() => {
  let myDynamicVar: any
  myDynamicVar = 100
  myDynamicVar = null
  myDynamicVar = {}
  myDynamicVar = ''

  myDynamicVar = 'Hola'
  const response = (myDynamicVar as string).toLowerCase()
  console.log({ response })

  myDynamicVar = 1212
  const response2 = (<number>myDynamicVar).toFixed()
  console.log({ response2 })
})
