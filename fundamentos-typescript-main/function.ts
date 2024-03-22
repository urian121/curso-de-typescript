
//En TypeScript nos permiten poner valores opcionales tanto en las clases, interfaces, parámetros etc, simplemente añadiendo el signo de interrogación, ejemplo:

//let miNombre?:string="hola";

//Oject param - Way 1
function greting1({name, age} : {name: string, age: number}) {
  console.log(`Hi, ${name}. You are ${age} years old.`);
  
} 

greting1({name: "Volta", age: 32})

//Oject param - Way 2

function greting2(person : {name: string, age: number}) {

  const {name, age } = person
  console.log(`Hi, ${name}. You are ${age} years old.`);
  
} 

greting2({name: "Volta", age: 32})


//Return type of a function

function greting3( person: {name: string, age: number}): number {

  const {name, age } = person
  console.log(`Hi, ${name}. You are ${age} years old.`);
  return age
  
} 

greting3({name: "Volta", age: 32})

// Return type of an arrow function - Way 1

const sum = (a: number, b:number): number => {
  return a + b
}
sum(2,2)

// Return type of an arrow function - Way 2

const subtraction: (a: number, b:number) => number = (a, b) =>  {
  return a - b
}

subtraction(6,2)


//never - no explicit return
// In TypeScript, the never type represents a type for values that never occur. It's often used to indicate that a function will never return a value or that it will always throw an exception. The never type is a subtype of all other types, which means it can be assigned to variables of any type.


function throwError(message: string): never {
  throw new Error(message)
}


// Inference in implicit functions
const marioParty  = ['Mario', 'Luigi', 'Yoshi']

marioParty.forEach(character => { // Implicit function
  console.log(character.toUpperCase()) // TS knows avenger is a string
})



function add(x: number, y: number): number {
    return x + y;
}

let myAdd = add(1, 2); // 3



function test(name: string = 'Dani', lastName?: string) {
	if (typeof lastName !== 'undefined') {
		return `Hola ${name} ${lastName}`;
	}
	return `Hola ${name}`;
}

console.log(test('Ishay'));   // Ishay
console.log(test('Ishay', 'Spiro'));   // Ishay Spiro