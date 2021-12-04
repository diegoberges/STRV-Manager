export class Oauth {
	state: string;
	code: string;
	scope: string;

	constructor() {
		this.state = '';
		this.code = '';
		this.scope = '';
	}
}
