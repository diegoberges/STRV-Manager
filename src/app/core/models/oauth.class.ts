import { IOauth } from './oauth.interface';
export class Oauth implements IOauth {
	state: string;
	code: string;
	scope: string;

	constructor() {
		this.state = '';
		this.code = '';
		this.scope = '';
	}
}
