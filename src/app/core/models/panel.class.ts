import { Club } from './club.class';
import { Shoe } from './shoe.class';
import { Bike } from './bike.class';
//TODO Sacarlo a un fichero de constantes para usarlo en todos los ficheros
type Contenido = Club | Shoe | Bike;

export class Panel {
	disabled: boolean = false;
	name: string = '';
	content: Contenido[] = new Array<Contenido>();

	constructor(
		disabled: boolean = false,
		name: string = '',
		content: Contenido[] = new Array<Contenido>()
	) {
		this.disabled = disabled;
		this.name = name;
		this.content = content;
	}
}
