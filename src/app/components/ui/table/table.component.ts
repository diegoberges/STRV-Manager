import { Component, Input } from '@angular/core';
import { TypeObject } from 'src/app/core/enums/type-object';
import { Bike } from 'src/app/core/models/bike.class';
import { Club } from 'src/app/core/models/club.class';
import { Shoe } from 'src/app/core/models/shoe.class';
import { BaseComponent } from '../../base/base.component';

@Component({
	selector: 'ui-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent extends BaseComponent {
	@Input() items: (Club | Shoe | Bike)[] = [];
	ngOnInit() {
		console.log(this.items);
		console.log(this.items[0].type);
		if (Array.isArray(this.items) && this.items[0].type == TypeObject.Club) {
			console.log('Club');
		} else if (
			Array.isArray(this.items) &&
			this.items[0].type == TypeObject.Shoe
		) {
			console.log('shoe');
		} else if (
			Array.isArray(this.items) &&
			this.items[0].type == TypeObject.Bike
		) {
			console.log('Bike');
		} else {
			console.log('Otro');
		}
		// console.log(this.items);
		// this.items.forEach((item) =>
		// 	console.log('item instanceof Club:', item instanceof Club)
		// );
		// console.log(this.isClub(this.items));
		// console.log(Array.isArray(this.items));
		// if(is<Club>(this.items)){
		// }
		// let TypeofBar1 = typeof this.items; // the value "object"
		// type TypeofBar2 = typeof this.items;
		// console.log(TypeofBar1);
		// console.log(TypeofBar2);
		// if(typeof this.items[0] === Club)
		// if(this.items is Club[])
		// type a = typeof this.items;
		// console.log(typeof this.items);
		// console.log(typeof this.items === Club); // False
		// console.log(typeof this.items[0] === Club); // False
		// console.log(this.items[0].name);
		// console.log(this.items);
		// console.log(this.items instanceof Club); // False
		// console.log(this.items[0] instanceof Club); // False
		// console.log(this.items instanceof Object); // True
		// console.log(this.items[0] instanceof Object); // True
		// console.log(this.items[0].getName());
		// console.log(a);
		// var b = typeof this.items;
		// console.log(b);
		// var c = type this.items;
		// console.log(c);
		// if (this.items instanceof Bike) {
		// 	console.log('Bike');
		// }
		// if (this.items instanceof Club) {
		// 	console.log('Club');
		// }
	}
	// private isClub(club: any): club is Club {
	// 	return (club as Club).sport_type !== undefined;
	// }
}
