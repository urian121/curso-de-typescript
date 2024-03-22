/**
 *  Union Types, Se puede definir una variable con múltiples tipos de datos: Union Type.
 * Se usa el símbolo de pipe ('|') entre los tipos.
 */

// 10, '10'
let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUserNameById(id: number | string) {
	//Logica de negocio
	return 'textoPorEjemplo'
}

getUserNameById(20);
getUserNameById('20');