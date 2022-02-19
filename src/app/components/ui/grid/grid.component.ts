import { Component, Input, Type } from '@angular/core';
import { TypeObject } from 'src/app/core/enums/type-object';
import { Bike } from 'src/app/core/models/bike.interface';
import { Club } from 'src/app/core/models/club.interface';
import { Shoe } from 'src/app/core/models/shoe.interface';
import { BaseComponent } from '../../base/base.component';

@Component({
	selector: 'ui-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss'],
})
export class GridComponent extends BaseComponent {
	@Input() items: (Bike | Shoe | Club | any)[] = [];
	columns: string[] = [];
	tipo!: TypeObject;
	ngOnInit() {
		this.createColumns(this.items);
	}
	private createColumns(items: (Bike | Shoe | Club)[]): void {
		if (Array.isArray(items) && items[0].type != null) {
			this.tipo = items[0].type;

			switch (this.tipo) {
				case TypeObject.Club: {
					this.createClubData(this.tipo);
					break;
				}
				case TypeObject.Bike:
				case TypeObject.Shoe: {
					this.createEquipmentData(this.tipo);
					break;
				}
				default: {
					break;
				}
			}
		}
	}
	private createClubData(tipo: TypeObject): void {
		this.columns = ['', '', 'Nombre', 'Deporte', 'Localización'];
		this.items = this.items.filter((item) => item.type == tipo);
	}

	private createEquipmentData(tipo: TypeObject): void {
		this.columns = ['Distancia', 'Nombre', 'Principal'];
		this.items = this.items.filter((item) => item.type == tipo);
	}
}
