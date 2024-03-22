//way-1
const lenguages1: string[] = []
lenguages1.push("spanish")

const lenguages2: (string | number)[] = []
lenguages2.push('spanish')
lenguages2.push(1)


//way-2
const lenguages3: Array<string> = []
lenguages3.push('spanish')

const lenguages4: Array<string | number> = []
lenguages4.push('spanish')
lenguages4.push(1)


// Tuples-1
type CellValue = 'X' | '0' | ''
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
  ['X', '0', 'X'],
  ['0', 'X', '0'],
  ['X', '', '0']
]

// Tuples-2
type RGB = [number, number, number]

const rgb: RGB = [255, 255, 255]