import { TypeObject } from '../enums/type-object';
import { Equipment } from './equipment.interface';
export interface Shoe extends Equipment {
	type: TypeObject;
}
