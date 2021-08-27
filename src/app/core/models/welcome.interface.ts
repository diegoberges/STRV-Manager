import { IAthlete } from './athlete.interface';

export interface IWelcome {
	tokenType: string;
	expiresAt: number;
	expiresIn: number;
	refreshToken: string;
	accessToken: string;
	athlete: IAthlete;
}
