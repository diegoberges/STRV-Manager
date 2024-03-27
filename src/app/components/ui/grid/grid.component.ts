import { Component, Input, OnInit, Type } from '@angular/core';
import { TypeObject } from 'src/app/core/enums/type-object';
import { SummaryClub } from 'src/app/core/models/strava/summary-club.interface';

@Component({
  selector: 'app-ui-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() items: /*Bike | Shoe | */ (SummaryClub | any)[] = [];
  columns: string[] = [];
  tipo!: TypeObject;
  ngOnInit() {
    this.createColumns(this.items);
  }
  private createColumns(items: /*Bike | Shoe | */ SummaryClub[]): void {
    // if (Array.isArray(items) && items[0].type != null) {
    // 	this.tipo = items[0].type;
    // 	switch (this.tipo) {
    // 		case TypeObject.Club: {
    // 			this.createClubData(this.tipo);
    // 			break;
    // 		}
    // 		case TypeObject.Bike:
    // 		case TypeObject.Shoe: {
    // 			this.createEquipmentData(this.tipo);
    // 			break;
    // 		}
    // 		default: {
    // 			break;
    // 		}
    // 	}
    // }
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
