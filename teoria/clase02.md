# <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> CLASE 2 :computer:

## ¿Por qué usar TS?

- popularidad

- empleo

- compila a JS

## ¿Qué es TS?

- lenguaje de programación

- superset de JS

- para añadir tipos al lenguaje

## ¿Por qué usar TS?

Uno de los problemas de JS es que es un lenguaje con tipado dinámico y débil.

```JavaScript
2 + '2' = '22'
```

## ¿Qué no hace TS?

- analiza en tiempo real de compilación, de forma estática

- no aregla los problemas en tiempo de ejecución


---


## Tuplas


Son mutables, con el **Readonly** se soluciona.

```TypeScript
type RGB = readonly [number, number, number]
const black: RGB = [0, 0, 0]
// Al tener el READONLLY no podria hacer: black.push(4)
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  Cómo crear y extender tus tipos 


```TypeScript
// template union type
type HeroId2 = `${ string }-${ string }-${ string }-${ string }-${ string }`

type Hero2 = {
  readonly id?: HeroId2
  name: string
  age: number
  isActive?: boolean 
}
```


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Enums

Como en Js no tenemos Enum, odriamos guardar los posibles valores en una constante, de este modo:

```JavaScript
const ERROR_TYPES = {
  NOT_FOUND: 'notFound',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden'
}

function mostrarMensaje(tipoDeError) {
  if(tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No tienens permisos para acceder')
  } else if(tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder')
  }
}
```


En TS si tenemos **Enum**, se utiliza para una colección de datos finitos.


![image](https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo/assets/72580574/daee596e-0d4f-4c74-9924-9e671cc49d47)


Si ahora agrego **const**:

![image](https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo/assets/72580574/64d821bd-bc10-44d1-b380-22a3bab827cd)


Aunque hay veces en que necesito que empiece por un número distinto al **0**, por eos les puedo dar el valor:


```TypeScript
const enum ERROR_TYPES {
  NOT_FOUND= 'notFound',
  UNAUTHORIZED= 'unauthorized',
  FORBIDDEN= 'forbidden'
}
```

### ¿Por qué no debería usar const?

Siempre que se pueda utilizar **const** para no generar código demás, pero hay que utilizar sin const cuando se crea un componente que va al exterior, que se consume por fuera de mi aplicación.

---


## Aserciones de tipo

```TypeScript
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
```

-> puede devolver: **null** si no lo encuentra o **HTMLElement** si lo encuentra

- ¿Como sabe TS que estas recuperando un elemento ```<canvas />```?

->  Necesitamos un tipo mas especifico: ```HTMLCanvasElement```

Por eso el `as HTMLCanvasElement`

OJO porque perdemos que puede ser null. Por ello es mejor hacer la **Asercion** luego de la comprobación.

En vez de:

```TypeScript
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
```


Mejor:

```TypeScript
const canvas = document.getElementById('canvas') 

if(canvas != null) {
  const ctx = (canvas  as HTMLCanvasElement).getContext('2d')
}
```

Pero todavìa podemos tener un error, si por ejmplo hacemos : `document.getElementById('span') ` no sabe que no es canvas, entonces es mejor:

```TypeScript
const canvas = document.getElementById('canvas') 

// inferencia -> TS se da cuenta que dentro del IF ya solo el canvas va a poder ser un HTMLCanvasElement
if(canvas != null && canvas instanceof HTMLCanvasElement) {
  const ctx = (canvas).getContext('2d')
}
```

`

---
## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type vs Interface


**typeof** -> para tipos: string, boolean, numbers(para tipos basicos)

**insanceof** -> para instancias, para: Date, objetos, etc

---

## Fetching de data de API

En vez de ir tipando manualmente, mejor:

1- me copio la URL

2- hago la peticion

3- copio la respuesta

4- voy a https://app.quicktype.io/

5- Pego la respuesta, cambio el nombre, dejo JSON y a la derecha busco TS, Interface only, Verify JSON parse results at runtime, use types instead of interfaces

6- y tengo todos los tipos de la API

7- lo guarde enun archiv para usarlo en mi type en el archivo **data.mts**, si los Enums los paso a const veo que cuando se pase a JS NO TIENE NINGUNA VALDACION.

Tengo la otra opción **TS Zod**, es una biblioteca con validacion de tipos (para validr en tiempo de ejecución, se va a ejecutar en JS y se va a validar).

## Interface 

Es muy similar a los **type**, pero ¿Que es una interfaz? Nos dice que forma debe tener, moldea el contrato, no nos dice el como. DEfinimos le **contrato de un objeto**, para especificar sus **propiedades** y **métodos**.

- Pueden estar anidadas, una interfaz puede estar dentro de otra interfaz, por ejemplo:

```TypeScript
interface Product {
  id: number
  name: string
  price: number
  quantity: number
}

interface ShoppingCart {
  totalPrice: number
  products: Product[]
}

const carrito: ShoppingCart = {
  totalPrice: 100,
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 1
    }
  ]
}
```

- Algo que NO SE PUEDE HACER CON TYPE a la hora de extender y SI SE PUEDE HACER CON INTERFACE, puede **extender**, hereda los mismos atributos y metodos, más los suyos propios.



```TypeScript
interface Product {
  id: number
  name: string
  price: number
  quantity: number
}

interface Shoe extends Product {
  size: number
}
```

Los type si se pueden extender, pero se pueden añadir o hacer intersecciones, en cambio acá se peude extender. Si puedo combinar ambas, por ejemplo:


```TypeScript
interface ShoppingCart {
  totalPrice: number
  products: (Product | Shoe)[]
}
```

- Hay dos formas para indicar métodos en las interfaces:

Una forma:

```TypeScript
interface ShoppingCartOps {
  add: (product: Product) => void,
  remove: (id: number) => void,
  claer: () => void
}
```

Otra forma:

```TypeScript
interface ShoppingCartOps {
  add(product: Product): void
  remove(id: number): void
  claer(): void
}
```

- Lo que tiene de contra es que podemos escribir sus métodos más de una vez, por lo que estaríams modificando, por ejemplo:

```TypeScript
interface ShoppingCartOps {
  add: (product: Product) => void,
  remove: (id: number) => void,
}

interface ShoppingCartOps {
  claer: () => void
}
```

De este modo nos podemos equivocar, y reescribir un mismo método, puede dar errores, esto con los types no ocurre. -> **una de las diferrencias más importantes**

### ¿Interfaces o Types?

Depende. En la documentación de TypeScript nombra la diferencia de lo de poder extenderse que tienen las interfaces y lo malo de que podes reescribir sin querer los métodos en la interfaz.

La **interfazce** siempre habla de un **objeto**, nunca podriamso hacer esto de : `type RGB:number[]`, no podria hacer un array, siempre es un objeto. Con una interface tampoco podría hacer esto: `type HeroId = ${number}-${number}` para luego poder utilizar este tipo en un atributo id de una interface Hero.

En general siempre intertar utilizar **type**, se entiende bien, son versatiles, pero cuando se trabaja con **object** o **class** ahi si puede ser que se necesite **interface**.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  Narrowing

Hacemos como un embudo, nos aseguramos que vamos perdiendo los tipos

- Primer ejemplo, con validaciones de if typeof, similar a lo que vimso con canva, pero es muy básica

```TypeScript
function mostrarLongitud(objeto: number | string) {
  if(typeof objeto === 'string') {
    return objeto.length
  }
  return objeto.toString().length
}

mostrarLongitud('1')
```

Segundo modo, usando las **propiedades discriminantes** si es Mario la company es Nintendo y si es Sonic la company es Sega, uso esto para validar en vez de los typeof:

```TypeScript
interface Mario  {
  company: 'Nintendo',
  nombre: string,
  saltar: () => void
}

interface Sonic {
  company: 'Sega',
  nombre: string,
  correr: () => void
}

type Personaje = Mario | Sonic

function jugar(personaje: Personaje) {
  console.log(personaje.nombre)
  console.log(personaje.company)
  // correr o saltar depende si es Mario o Sonic
  if(personaje.company === 'Nintendo') {
    personaje.saltar() // <- este es Mario
    return
  }
  if(personaje.company === 'Sega') {
    personaje.correr() // <- este es Sonic
    return
  }
}
```

Y en el caso de que no tuvieramos el atributo company, por lo que no contaríamos con las propiedades discriminantes, se hace de otro modo, por fuera hacemos una función para ver si es Mario o Sonic, con **type guard**.

Creamos la funcion checkIsSOnic que **discrimina el type** y lo hacemos a través de uan propiedad que no sabemos si existe o no, doy por sentadoq eu es Sonic, que es el unico que puede correr, y ahi vemos.

```TypeScript
interface Mario  {
  nombre: string,
  saltar: () => void
}

interface Sonic {
  nombre: string,
  correr: () => void
}

type Personaje = Mario | Sonic

// type guard
// dejame comprobar si personaje es Sonic
// y esta funcion determina si es Sonic o no
function checkIsSonic(personaje: Personaje):personaje is Sonic {
  retunr (personaje as Sonic).correr !== undefined 
}

function jugar(personaje: Personaje) {
  if(checkIsSonic(personaje)) {
    personaje.correr() 
  }
}
```

OJO los type words siempre que se puede hay que evitarlo, porque si tuviera otro personaje necesitaría otro metodo más.


---

## Never

```TypeScript
function fn(x: string | number) { 
  if(typeof x === 'string'){
    // x es string
    x.toUpperCase()
  } else if (typeof x === 'number') {
    // x es number
    x.toFixed(2)
  } else {
    x // never porque nunca llega
  }
}
```


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Clases

- Tengo que aclarar los tipos en las propiedades y les puedo dar un valor inciial

```TypeScript
class Avenger {
  name: string
  powerScore: number = 0

  constructor(name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
  }

  get FullName() {
    return `${this.name}, of power ${this.powerScore}`
  }

  set power(newPower: number) {
    if(newPower <= 100) {
      this.powerScore = newPower
    } else {
      throw new Error('Power score cannot be more than 100')
    }
  }
}

const avengers = new Avenger('Spidey', 80)
```

**modificadores de acceso** -> /por default si no tengo nada es **public**, otro que hay es el **protected** las clases heredadas tambien acceden y el más restrictivo es **private**.

```TypeScript
class Avenger {
  name: string
  private powerScore: number = 0 // atributo de acceso private

  constructor(name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
  }

  get FullName() {
    return `${this.name}, of power ${this.powerScore}`
  }

  set power(newPower: number) {
    if(newPower <= 100) {
      this.powerScore = newPower
    } else {
      throw new Error('Power score cannot be more then 100')
    }
  }
}

const avengers = new Avenger('Spidey', 80)
```

También puedo tener interfaces, lo que si al tener los atributos/propiedades en una interfaz, no los puedo inicializar, ni puedo agregar una nueva propiedad que no este en al interfaz


TS tiene HERENCIA MULTIPLE; se puede implementar más de una Interface.

Puedo declarar una rchivo **types.d.ts**, con **.d** por definicion, y ahi tener mis interfaces o types que voy a implementar en mis clases.

Por más que **implemento** una interface, tengo que volver a **declarar los atributos** en mi clase.

```TypeScript
```
