# <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> CLASE 1 :computer:

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> ¿Qué es TypeScript ?

- Es JavaScript con una sintaxis para tipos.

- Es un superset de JavaScript, le agrega **tipos estáticos**(su base es JavaScript).

- No funciona en tiempo de ejecución, se compila y llega al navegador como JavaScript.

<img src="https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo/assets/72580574/01a67373-7b04-447d-9836-b789d43f9ee3" width="280" alt="typescript y javascript">


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> ¿Por qué aprenderlo?

- Se está utilizando cada vez más. Hay más opciones de trabajo.

- Es sencillo de aprender.


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Ventajas

- Fue creado en 2012 por **Microsoft**, en sus aplicaciones muy grandes necesitaban el grado de seguridad de los tipos.

- JavaScript es de tipo débil y dinámico, por ejemplo si tenemos una variable **a** se puede inicializar como un **string** y luego asignarle un valor **number**:
```JavaScript
let a = 'hola'
a = 10
```

En cambio con TypeScript:

```TypeScript
let a:string = 'chau'
// a = 2 esto no se puede hacer, ya se infiere es de tipo string no number
```

Ejemplo de una función con TypeScript:
```TypeScript
function suma(a:number, b:number):number {
  return a+b
}
suma(2,3)
```

- El codigo se va 'autodocumentando', ya no es necesario escribir tanto explicando las funciones.


- Añade: seguridad y robustez.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Concepto inferir 

```TypeScript
let saludo:string = 'hola mundo'
// infiere que es de tipo string, no puede volver a tener reasignado un valor que no sea de string
let nombre = 'María Eugenia' 
```

---


## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> TypeScript compilación

**TS** funciona en tiempo de **compilación** y **JS** funciona en tiempo de **navegacion**

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Herramientas 

- **VSC** esta creado con TS, ya lo tine nativo, por lo que si se escribe el código en VSC, ya nos va a ir marcando los errores. También tenemos el autocomplete.

- **TS** es capaz de observar como es y te dice su forma.

- Hay una extensión en VSC: **Pretty TypeScript Errors** de yoavbls

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Tipos en TypeScript

- string

- number

- null

- undefined

- boolean

- any, asi IGNORA el tipado de TS, por eso hay que evitarlo si o si

- unknown, no sabemos cual es el tipo


Para los tipos básicos no es necesario tipar cuando declaro las variables.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Funciones

Los parametros de las funciones no tienen inferencia, si no tienen contexto

```TypeScript
function saludar(name: string) {
  console.log(`Hola ${ name }`)
}

saludar('Pepe')
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Tipar funciones parametros


Si en los **parametros** tenemos un **objeto**, tneemos distintas formas de tiparlo...


...1er opción:

```TypeScript
function saludoCompleto({ name, age }: { name: string, age: number }) {
  console.log(`Hola ${ name }, tienen ${ age } años`)
}
```

...2da forma de tiparlo:

```TypeScript
function saludoCompleto2(persona: { name:string, age:number }) {
  const {name, age} = persona // si o si necesito desestructurar
  console.log(`Hola ${ name }, tienen ${ age } años`)
}
```

- También se puede tipar el **Return** de la función:

```TypeScript
function saludoCompleto3(persona: { name:string, age:number }): number { // devuelve number
  const {name, age} = persona 
  console.log(`Hola ${ name }, tienen ${ age } años`)
  return age  // devuelve number
}
```


- Por definición las funciones **no tienen inferencia**, pero hay casos en los que si, en las **funciones anonimas**, según el contexto:


```TypeScript
const avengers = ['Spidey', 'Hulk', 'Avengers']
avengers.forEach(avenger => {
  console.log(avenger.toUpperCase())
})
```

Dentro del console.log cuando tengo avengers. veo los metodos del string, TS con el **.forEach()** sabe qeu es un array de string e infiere que avenger es un string. Pasa con todas las funciones de array, por ejemplo con **.map()**

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Tipar "arrow functions"

Ojo esto esta sin tipar, es solo para indicar la parte del callback.

<img src="https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo/assets/72580574/efe91de5-ad93-45bf-bbd8-9f1667c6b400" width="350" alt="arrow function" />


OJO, no usar **Function** para tipar, es el **any** de las funciones, hay que evitarlo, hay que decir que funcion necesitamos

```TypeScript
const sayHiFromFunction = (fn: (name:string) => void) => {
  return fn('Euge')
}

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`)
})
```

**void** porque no tiene un **return**, si no usamos **void** devuelve **undefined** explicitamente. Si tengo void e igualmente devuelve algo, no hya problemas en la compilación.



- Un modo de tipar las arrow functions

```TypeScript
const sumar = (num1: number, num2: number): number => a + b
```


- Otro modo de tipar las arrow functions. Primero indico los tipos y luego la arrow function.

```TypeScript
const restar: (num1: number, num2: number) => number = (a, b) => { return a - b } 
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> never / void


NEVER


Para funciones que sabemos que nunca van a devolver nada. Tienen un throw y ahi finaliza la función, nunca llega al return implícito, nunca termina de ejecutarse la función.

```TypeScript
function throwError(message: string): never {
  if(message) throw new Error(message)
  throw new Error(message)
}
```

VOID

Cuando la función no va a devolver nada, aunque puede tener el return implicito y llegar a devolver.

```TypeScript
const sayHiFromFunction = (fn: (name:string) => void) => {
  return fn('Euge')
}

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`)
})
```


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Objetos

Los objetos tienen inferencia de datos:

```TypeScript
let hero = {
  name: 'Thor',
  age: 1500
}

// hero.name= 1234434
// hero.power = 100
```

-> ya infiere que **name** es de tipo **string** y **Age** es de tipo **number**. No puedo asignar un number a name que es string.

Lo que NO puedo hacer con TS es agregarle un nuevo par key:value al objeto, si queiria agregar power me lo marca como error y avisa que no existe.


**TS** nos hace  un **contrato** de nuestros objetos. Es una de las ventajas, ya que con javaScript podemos ir agregando a lo loco lo que queramos en el objeto.


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type Alias


```TypeScript
type Hero = {
  name: string
  age: number
}

let hero: Hero = {
  name: 'Thor',
  age: 1500
}

// hero.name= 1234434
// esto no es posible porque ya infiere que name es string

function createHero(name: string, age:number): Hero {
  return { name, age  }
}

const thor = createHero('Thor', 1500)
```

Otro modo, aca voy a tener que desestructurar:

```TypeScript
function createHero2(hero: Hero): Hero {
  const {name, age} = hero
  return { name, age  }
}

const thor2 = createHero({name:'Thor', age: 1500})
```



---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Optional properties

<img src="https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo/assets/72580574/5edb50a4-7ccf-4916-9c0d-16d88549a1a6" width="480" alt="optional properties" />


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Optional chaining operator


```TypeScript
let name =  data?name
```

Si existe **data** entonces busco el valor de la key **name**


Le puedo agregar un valor por defecto:
```TypeScript
thorn.id ?? 'No tiene valor'
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Mutabilidad

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Object freeze

```TypeScript
type Hero = {
  readonly id?: number
  name: string
  age: number
  isActive?: boolean // ? -> opcional, puede tenerlo o no
}
```

El **id** al ser readonly es de tipo lectura, pero **no es inmutable**, al ser opcional al pasar a JavaScript no se ve en el objeto, para que realmente sea inmutable hay que utilizar JavaScript y el **object freeze**:

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Template union types


Creo el tipo HeroId para usarlo dentro de otro tipo(Hero)

```TypeScript
type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
  readonly id?: HeroId // es de tipo: HeroId 
  name: string
  age: number
  isActive?: boolean 
}

function createHero(hero: Hero): Hero {
  const { name, age } = hero
  return { 
    id: crypto.randomUUID(), // es de tipo: HeroId 
    name, age, 
    isActive: true 
  }
}
```

Un **type** puede ser una **RegEx**

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Union Types

Es como un join en sql


Ejemplo 1: puede ser de tipo number o string:
```TypeScript
let annnn: number | string 
```

Ejemplo 2: puede ser un string o el numero 2:
```TypeScript
let annnn: string | 2 
// annnn = 3 va a dar error
```

Ejemplo 3:
```TypeScript
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'

type Hero = {
  readonly id?: HeroId
  name: string
  age: number
  isActive?: boolean
  powerScale?: HeroPowerScale
}
```

Para usar con animaciones, pueden ser booleanas o un nuemro, si es un número por defecto son 200ms
```TypeScript
const enableAnimationDuration:  boolean | number = 200
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Intersection types

Para extender tipos, se crean tipos a travesde otros tipos

Es al reves del **union**(que es un OR), es un AND.

```TypeScript
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

function createHero(hero: HeroBasicInfo): Hero {
  const { name, age } = hero
  
  return {
    id: crypto.randomUUID(),
    name, age,
    isActive: true
  }
}
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type indexing

Para poder reutilizar partes:
```TypeScript
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
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type from value y typeof


```TypeScript
const address: {
  planet: 'Earth',
  city: 'Madrid'
}

// para crear un tipo a partir de una constante
type Address = typeof address 
```

**typeof** en JavaScript es para ver de que tipo es, pero en TypeScript es como un supra conjunto que hace muchas más cosas, extraemos los **tipos** (de un objecto, funciones, etc).

```TypeScript
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
```


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type from function return


**ReturnType** -> quiero que me recuperes lo que devuelve la función que tengo entre los ``<>``

```TypeScript
function createAddress() {
  return {
    planet: 'Tierra',
    city: 'Barcelona'
  }
}

type Address2 = ReturnType<typeof createAddress>
```

Me permite extraer los tipos de cualquier funcion, para poder reutilizarlos en otro lado.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Arrays



Voy a crear un array vacio, que va a tener elementos de tipo **string**
```TypeScript
const languajes:string[] = []
languajes.push('JavaScript')
```

Lo cual no me va a permitir agregar un number, un booleano u otro dato que no sea string:

```TypeScript
// lenguajes.push(2)
// lenguajes.push(false)
```

Otra sintaxis:
```TypeScript
const lenguages: Array<string>
```

Para que pueda tener tanto string como number:
```TypeScript
const languajes: (string | number)[] = []
```

Tambien puede ser un array de los tipos de datos
```TypeScript
const heroWithBasicInfo :HeroBasicInfo[] = []
```


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Matrices y tuplas


Para armar el Tres en raya (Ta-Te-Ti):

```TypeScript
type CellValue = 'X' | 'O' | ''
```

**TUPLA**, un array que tiene un limite fijado de longitud

```TypeScript
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]
```
GameBoard es una tupla, es un array,q eu adentro teine 3 elementos, cada uno de ellos es otro array con 3 elementos

```TypeScript
const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', '', 'X']
]
```

-> Otro ejemplo con colores RGB:

```TypeScript
type RGB = [number, number, number]
const rgb: RGB = [255, 255, 0] // 0 - 255
```

---

