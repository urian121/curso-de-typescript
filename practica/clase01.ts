/********************************** Tipos *****************************************/
const number = 1
const n: number = 2
let cadenaDeTexto = 'hola' // si hacemoscadena. vemos todos los métodos de los string
cadenaDeTexto.toLowerCase()
let nulo = null
let indefinido: undefined = undefined

/************************************ any ******************************************/
// ¿Que pasa cuando no puede inferir un tipo? ANY
let cualquierCosa // any, IGNORA el tipado

let noSeQueTipoEs: unknown
noSeQueTipoEs = 'Soy un string'

/**************************** Inferencia de tipos ***********************************/
// a y b os infiere como number
const a = 1
const b = 2
const c = a + b // c también será number

/********************************** Funciones ***************************************/
// Los parametros de las funciones no tienen inferencia, si no tienen contexto
function saludar(name: string) {
  console.log(`Hola ${ name }`)
}

saludar('Pepe')

// Primer forma de tipar un objeto
// si solo tenia: {name:string, age:number} a la propiedad name le reasigno string, no indico que es string
function saludoCompleto({ name, age }: { name: string, age: number }) {
  console.log(`Hola ${ name }, tienen ${ age } años`)
}

saludoCompleto({ 'Pepe', 30})

// Segunda forma de tipar un objeto
function saludoCompleto2(persona: { name: string, age: number }) {
  const { name, age } = persona // si o si necesito desestructurar
  console.log(`Hola ${ name }, tienen ${ age } años`)
}

// Tipando lo que devuelve una funcion
function saludoCompleto3(persona: { name: string, age: number }): number { // devuelve number
  const { name, age } = persona
  console.log(`Hola ${ name }, tienen ${ age } años`)
  return age  // devuelve number
}

// Funciones como parametro
// Funciones son FIRST CLASS CITIZEN(ciudadanos de primera clase)
// Es cun callback, una funcion que invoca a otra funcion
const sayHiFromFunction = (fn: (name: string) => void) => {
  return fn('Euge')
}

sayHiFromFunction((name: string) => {
  console.log(`Hola ${ name }`)
})

const sumar = (num1: number, num2: number): number => a + b

// Otro modo de tipar
// primero indico los tipos y luego la arrow function
const restar: (num1: number, num2: number) => number = (a, b) => { return a - b }

/*************************************** never ***************************************/
// Para funciones que sabemos que nunca van a devolver nada. 
// Tienen un throw y ahi finaliza la función, 
// nunca llega al return implícito, 
// nunca termina de ejecutarse la función.
function throwError(message: string): never {
  if (message) throw new Error(message)
  throw new Error(message)
}

// inferencia funciones anonimas segun el contexto
const avengers = ['Spidey', 'Hulk', 'Avengers']
avengers.forEach(avenger => {
  console.log(avenger.toUpperCase())
})


/********************************** Objects ********************************/

/********************** Type (alias) ***************************/
// type Hero = {
//   name: string
//   age: number
// }

// let hero: Hero = {
//   name: 'Thor',
//   age: 1500
// }

// // hero.name= 1234434
// // esto no es posible porque ya infiere que name es string

// function createHero(name: string, age:number): Hero {
//   return { name, age  }
// }

// function createHero2(hero: Hero): Hero {
//   const {name, age} = hero
//   return { name, age  }
// }
// const thor = createHero('Thor', 1500)

/******************** Template Union Types *****************/
// type HeroId = `${ string }-${ string }-${ string }-${ string }-${ string }`

/******************** Optional properties *****************/
// type Hero = {
//   // readonly -> para que sea solo del tipo lectura, ojo no es inmutable
//   // al ser opcional al pasar a JavaScript no se ve en el objeto
//   readonly id?: HeroId 
//   name: string
//   age: number
//   isActive?: boolean // ? -> opcional, puede tenerlo o no
// }

// let hero: Hero = {
//   name: 'Thor',
//   age: 1500
// }

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero
//   return { 
//     id: crypto.randomUUID(), // es de tipo: HeroId 
//     name, age, 
//     isActive: true 
//   }
// }

// const thor = createHero({ name: 'Thor', age: 1500 })
// console.log(thor.isActive) // true
// thorn.id = 12243434
// no puedo hacerlo porque es solo de tipo lectura 

/******************** Template Union Types *****************/
type HexadecimalColor = `#${ string }`
const color: HexadecimalColor = `#0033ff`
// Asi me aseguro de tener simepre el #
// const color2:HexadecimalColor = `0033ff`

/******************** Union types ****************************/
let annnn: number | string // puede ser de tipo number o string, es como un join en sql

// type HeroId = `${ string }-${ string }-${ string }-${ string }-${ string }`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'

// type Hero = {
//   readonly id?: HeroId,
//   name: string,
//   age: number,
//   isActive?: boolean,
//   powerScale?: HeroPowerScale
// }

// let hero: Hero = {
//   name: 'Thor',
//   age: 1500
// }

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero
//   return {
//     id: crypto.randomUUID(),
//     name, age,
//     isActive: true
//   }
// }

// const thor = createHero({ name: 'Thor', age: 1500 })
// thor.powerScale = 'planetary' // tiene que se un tipo de los que declare


/******************* Intersection Types *************************/
// Para extender tipos, se crean tipos a travesde otros tipos
type HeroId = `${ string }-${ string }-${ string }-${ string }-${ string }`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'

type HeroBasicInfo = {
  name: string,
  age: number,
}

type HeroProperties = {
  readonly id?: HeroId,
  name: string,
  age: number,
  isActive?: boolean,
  powerScale?: HeroPowerScale
}

type Hero = HeroBasicInfo & HeroProperties

let hero: Hero = {
  name: 'Thor',
  age: 1500
}

function createHero(hero: HeroBasicInfo): Hero {
  const { name, age } = hero

  return {
    id: crypto.randomUUID(),
    name, age,
    isActive: true
  }
}

const thor = createHero({ name: 'Thor', age: 1500 })
thor.powerScale = 'planetary' // tiene que se un tipo de los que declare

/*********************  Type indexes ************************/
type HeroProperties2 = {
  isActive?: boolean,
  address: {
    planet: string,
    city: string
  }
}

const addressHero: HeroProperties2['address'] = {
  planet: 'Earth',
  city: 'Madrid'
}

/****************** Type from value *****************/
const address: {
  planet: string,
  city: string
}

// para crear un tipo a partir de una constante
type Address = typeof address

const addressTwitch: Address = {
  planet: 'Mars',
  city: 'Twitch'
}

/***************** Type from function return ***************/
function createAddress() {
  return {
    planet: 'Tierra',
    city: 'Barcelona'
  }
}

// ReturnType -> quiero que me recuperes lo que devuelve la función que tengo entre los <>
type Address2 = ReturnType<typeof createAddress>

/********** Arrays ***********/
const languajes: string[] = []
// otra sintaxis -> const lenguages: Array<string>
// para que sea de string o number -> const languajes: (string | number)[] = []
languajes.push('JavaScript')

// tambien puede ser un array de los tipos de datos
const heroWithBasicInfo: HeroBasicInfo[] = []

/************** Matrices y tuplas *******************/
// Para el ejemplo del tres en raya(ta-te-ti), un array de arrays
/*
[
 ['X', 'O', 'X'], // string[]
 ['O', 'X', 'O'], // string[]
 ['X', ' ', 'X'] // string[]
]
*/
type CellValue = 'X' | 'O' | ''
// GameBoard es una TUPLA, un array que tiene un limite fijado de longitud
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]
const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', '', 'X']
]

// Otro ejemplo con un useState
type State = [string, (name:string) => void]
const [hero, setHero]: State = useState('thor')

// otro ejemplo con colores
type RGB = [number, number, number]
const rgb: RGB = [255, 255, 0] // 0 - 255