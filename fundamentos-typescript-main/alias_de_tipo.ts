// Permite crear un alias como nuevo nombre para un tipo, el alias se puede aplicar también a un conjunto o combinación de tipos. Se usa la palabra reservada type

type IdUser = number | string;
type Username = string;

idUser = 10;
idUser = '10';

function getUserNameById(id: number | string): Username {
	//Logica de negocio
	return 'textoPorEjemplo'
}