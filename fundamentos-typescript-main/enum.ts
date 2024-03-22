// JavaScript
const ERROR_TYPES = {
  NOT_FOUND: "notFound",
  UNAUTHORIZED: "unauthorized",
  FORBIDDEN: "forbidden"
}

function showMessage (errorType) {
  if (errorType === ERROR_TYPES.NOT_FOUND) {
    console.log('⚠️')
  } else if (errorType === ERROR_TYPES.UNAUTHORIZED) {
    console.log('✋')
  } else if (errorType === ERROR_TYPES.FORBIDDEN) {
    console.log('🛑')
  }
}



// TypeScript
enum NEW_ERROR_TYPES {
  NOT_FOUND, // 0
  UNAUTHORIZED, // 1
  FORBIDDEN // 2
}

function newShowMessage (errorType: NEW_ERROR_TYPES) {
  if (errorType === NEW_ERROR_TYPES.NOT_FOUND) {
     console.log('⚠️')
  } else if (errorType === NEW_ERROR_TYPES.UNAUTHORIZED) {
    console.log('✋')
  } else if (errorType === NEW_ERROR_TYPES.FORBIDDEN) {
    console.log('🛑')
  }
}