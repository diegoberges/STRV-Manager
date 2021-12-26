export class Equipment {
	id: string = '';
	primary: boolean = false;
	name: string = '';
	nickname: string = '';
	resource_state: number = 0;
	retired: boolean = false;
	distance: number = 0;
	converted_distance: number = 0;

	// constructor(equipment: Equipment) {
	// 	this.id = '';
	// 	this.primary = false;
	// 	this.name = '';
	// 	this.nickname = '';
	// 	this.resource_state = 0;
	// 	this.retired = false;
	// 	this.distance = 0;
	// 	this.converted_distance = 0;
	// }

	constructor(equipment?: Equipment) {
		// TODO Tendria que haber un solo create que aceptase array y prop y que la logica la hiciese dentro
		// if (Array.isArray(equipment)) {
		// 	equipment.forEach((x) => this.createEquipment(x));
		// } else {
		// 	// this.createEquipment(equipment);
		// }
		if (equipment != null) {
			this.id = equipment.id;
			this.primary = equipment.primary;
			this.name = equipment.name;
			this.nickname = equipment.nickname;
			this.resource_state = equipment.resource_state;
			this.retired = equipment.retired;
			this.distance = equipment.distance;
			this.converted_distance = equipment.converted_distance;
		}
	}
	// private createEquipment(x: Equipment): void {
	// 	this.id = x.id;
	// 	this.primary = x.primary;
	// 	this.name = x.name;
	// 	this.nickname = x.nickname;
	// 	this.resource_state = x.resource_state;
	// 	this.retired = x.retired;
	// 	this.distance = x.distance;
	// 	this.converted_distance = x.converted_distance;
	// }
}
