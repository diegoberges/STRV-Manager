import { TypeObject } from '../enums/type-object';
import { Equipment } from './equipment.interface';

export interface Bike extends Equipment {
	type: TypeObject;
}
