import { Athlete } from './athlete.class';

export class Welcome {
	token_type: string;
	expires_at: number;
	expires_in: number;
	refresh_token: string;
	access_token: string;
	athlete: Athlete;

	constructor() {
		this.token_type = '';
		this.expires_at = 0;
		this.expires_in = 0;
		this.refresh_token = '';
		this.access_token = '';
		this.athlete = new Athlete();
	}
}
