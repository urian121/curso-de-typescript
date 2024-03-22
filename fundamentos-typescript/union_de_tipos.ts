/**
 *  Union Types, Se puede definir una variable con múltiples tipos de datos: Union Type.
 * Se usa el símbolo de pipe ('|') entre los tipos.
 */

// Definición de una función que toma un parámetro que puede ser de tipo number o string
function imprimirValor(valor: number | string) {
    console.log(valor);
}

// Uso de la función con diferentes tipos de datos
imprimirValor(10);      // Salida: 10
imprimirValor('Hola');  // Salida: Hola

// Definición de una variable con una unión de tipos
let resultado: number | string;

resultado = 100;   // resultado ahora es de tipo number
console.log(resultado * 2);  // Salida: 200

resultado = '¡Hola!';  // resultado ahora es de tipo string
console.log(resultado.toUpperCase());  // Salida: ¡HOLA!
