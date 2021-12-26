import { AthleteBase } from './athlete-base.class';

export class Welcome {
	token_type: string = '';
	expires_at: number = 0;
	expires_in: number = 0;
	refresh_token: string = '';
	access_token: string = '';
	athlete: AthleteBase = new AthleteBase();
}
