![](https://camo.githubusercontent.com/6fe4130ec7473aca1cb065f239ca3373fd3c9539d02356e89215434d0529f7c9/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f747970657363726970742e706e67)

# Curso de TypeScript- Guía definitiva

### Definición de TypeScript

Es un lenguaje de programación desarrollado por Microsoft y es de código abierto u Open Source y que todo el mundo se lo puede descargar, utilizar y modificar completamente gratis.

Es un superconjunto tipado de javascript, que compila a javascript.

Lenguaje de programación tipado: Posee un conjunto de tipos para poder usarlos con las variables, pudiendo personalizarlos o extenderlos.

Lenguaje de alto nivel: Entendible por humanos y posee un alto nivel de abstracción del código máquina.

Genera como resultado código JavaScript: Emite código javascript compatible con browsers y otras herramientas de javascript.

Código abierto.

Desarrollo desde cualquier sistema.

El código puede ejecutarse en cualquier navegador o plataforma que soporte javascript.

Es un superconjunto de JavaScript que añade tipado estático y está basado en clases.

###### Requerimientos de uso

Tener Node instalado
Instalar typescript a nivel global en tu pc
Un servidor que ejecute html
Un navegador
Consola (Windows)/Terminal (Mac/Linux)
Visual Studio Code
Tener git instalado en el equipo

### Instalar TypeScript de manera global

npm install -g typescript

### Verificar versión

tsc —version o tsc -v

### Archivo de configuración tsconfig.json

Especifica la raiz de un proyecto TypeScript
Permite configurar opciones para el compilador

# Iniciar un proyecto con TypeScript

tsc --init Crear el archivo de configuración.
npm init -y le decimos yes a todo por defecto

## Temario del curso

### Introducción a TypeScript

Por qué usar TypeScript
TypeScript vs JavaScript
Configurando nuestro proyecto
Atrapando bugs
El compilador de TypeScript
Veamos el TSConfig.json

### Tipos de datos primitivos

Qué es el tipado en TypeScript
Tipos inferidos
Numbers
Booleans
Strings
Arrays

### Tipos de datos especiales

Any
Union Types
Alias y tipos literales
Null y Undefined
Funciones
Retorno de funciones
Objetos en funciones
Objetos como tipos
Módulos: import y export
Usando librerías que soportan TypeScript
Usando librerías que NO soportan TypeScript

### Links TypeScript

Pagina oficial TypeScript
Playground TypeScript Playground

### Compilación automática

tsc --watch

La opción --watch del compilador de TypeScript, permite observar y recompilar nuestros archivos con cada cambio. El resultado de la compilación para cada archivo .ts se autogenera en el directorio dist/.

### Ejecuta tu código

Necesitamos un motor JavaScript para ejecutar el resultado(Archivos .js) de nuestros código TypeScript. En este caso podemos usar el que viene con Node:

node dist/tipos-basicos/tipos-basicos.js
node dist/main.js
