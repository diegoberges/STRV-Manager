import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
	@Input() items: string[] = [];
}
