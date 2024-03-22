(() => {
  type UserID = string | number
  let userId: UserID
  userId = 112
  console.log(userId)

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL' 
  let shirtSize: Sizes 
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
  shirtSize = 'S'
  // shirtSize = 's' -> Error
  console.log({ shirtSize })

  function printUserIdAndSize(userId: UserID, size: Sizes) {
    console.log(userId, size)
  }

  printUserIdAndSize(322, 'XL')
  // greeting('1231', 'lksjdf') -> Error
})()
