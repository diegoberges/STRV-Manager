import { Club } from './club.interface';
import { Shoe } from './shoe.interface';
import { Bike } from './bike.interface';
//TODO Sacarlo a un fichero de constantes para usarlo en todos los ficheros
type Contenido = Club | Shoe | Bike;

export interface Panel {
	disabled: boolean;
	name: string;
	content: Contenido[];
}
