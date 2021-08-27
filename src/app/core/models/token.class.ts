import { IToken } from './token.interface';
export class Token implements IToken {
	tokenType: string;
	expiresAt: number;
	expiresIn: number;
	refreshToken: string;
	accessToken: string;

	constructor(
		tokenType: string = '',
		expiresAt: number = 0,
		expiresIn: number = 0,
		refreshToken: string = '',
		accessToken: string = ''
	) {
		this.tokenType = tokenType;
		this.expiresAt = expiresAt;
		this.expiresIn = expiresIn;
		this.refreshToken = refreshToken;
		this.accessToken = accessToken;
	}
}
