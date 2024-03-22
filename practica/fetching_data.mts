import { GitHubAPIResponse } from "./data.mjs"
/************************* Fetching de datos con TS *************************/
// extension .mts, m de modulo
// de forma oficial no se podria utilizar export e import con extension .ts

const API_URL = "https://api.github.com/search/repositories?q=javascript"
const response = await fetch(API_URL)

if(!response.ok) {
  throw new Error('Request failed')
}

// data podria ser cualquier tipo de dato, puedo tratar manualmente de tipar:
/*
type APIResponse = {
  items: object[]
}
*/

/*
Pero en vez de ir armandolo manualmente, mejor:
1- me copio la URL
2- hago la peticion
3- copio la respuesta
4- voy a https://app.quicktype.io/
5- Pego la respuesta, cambio el nombre, dejo JSON y a la derecha busco TS, 
Interface only, Verify JSON parse results at runtime, use types instead of interfaces
6- y tengo todos los tipos de la API
7- lo guarde en data.mts
*/

const data = await response.json() as GitHubAPIResponse
// data.items:Item[]
// repo:Item
data.items.map(repo => {
  return {
    name: repo.name,
    id: repo.id,
    url: repo.html_url
  }
})
