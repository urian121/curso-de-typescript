// Interfaces - Objects & Classes
//Constituyen una forma poderosa de definir "contratos", tanto para tu proyecto, como para el código externo del mismo.

interface Person {
  name: string
  age: number
  greeting: () => void
}

let person: Person = {
  name: 'Thor',
  age: 1500,
  greeting: () => {
    console.log('Hi')
  }
}