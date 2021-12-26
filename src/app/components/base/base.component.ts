import { Component, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
})
export class BaseComponent {
	ngOnInit(): void {
		console.log('Init Base');
	}

	ngOnChanges(changes: SimpleChanges) {
		// console.log('Changes Base');
		// console.log(changes);
	}
}
