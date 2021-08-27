import { Athlete } from './athlete.class';
import { IAthlete } from './athlete.interface';
import { IWelcome } from './welcome.interface';

export class Welcome implements IWelcome {
	tokenType: string;
	expiresAt: number;
	expiresIn: number;
	refreshToken: string;
	accessToken: string;
	athlete: IAthlete;

	constructor() {
		this.tokenType = '';
		this.expiresAt = 0;
		this.expiresIn = 0;
		this.refreshToken = '';
		this.accessToken = '';
		this.athlete = new Athlete();
	}
}
