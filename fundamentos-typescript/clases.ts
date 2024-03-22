/**
 * A partir de ECMAScript 2015 es posible construir clases y hacer uso del paradigma de la POO en JavaScript. TypeScript permite aplica estas técnicas sin tener que esperar por otra versión.
 */
class Persona {
    // Propiedades
    nombre: string;
    edad: number;

    // Constructor
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Uso de la clase Persona
const persona1 = new Persona('Juan', 30);
persona1.saludar(); // Salida: Hola, mi nombre es Juan y tengo 30 años.
