import { TypeObject } from '../enums/type-object';
import { Equipment } from './equipment.class';

export class Bike extends Equipment {
	type: TypeObject = TypeObject.Bike;
	constructor(bike?: Bike) {
		super(bike);
	}
}
