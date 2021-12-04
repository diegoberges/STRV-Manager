export class Bike {
	id: string;
	primary: boolean;
	name: string;
	nickname: string;
	resource_state: number;
	retired: boolean;
	distance: number;
	converted_distance: number;

	constructor() {
		this.id = '';
		this.primary = false;
		this.name = '';
		this.nickname = '';
		this.resource_state = 0;
		this.retired = false;
		this.distance = 0;
		this.converted_distance = 0;
	}
}
