/**
 * A partir de ECMAScript 215 es posible construir clases y hacer uso del paradigma de la POO en JavaScript. TypeScript permite aplica estas técnicas sin tener que esperar por otra versión.
 */

class Picture {
	// Propiedades
	public id: number;
	public title: string;
	public orientation: PhotoOrientation

	constructor(id: number, title: string, orientation: PhotoOrientation) {
		this.id = id;
		this.title = string;
		this.orientation = orientation;
	}

	//Comportamiento
	public toString() {
		return `[id: ${this.id}, 
						title: ${this.title},
						orientation: ${this.orientation}]`
	}
}

class Album {
	public id: number;
	public title: string;
	public pirctures: Picture[];

	constructor(id: number, title: string) {
		this.id: id;
		this.title: title;
		this.pictures: []
	}

	public addPicture(picture: Picture) {
		this.pictures.push(picture);
	}
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log(album);