import { IToken } from './token.interface';
export class Token implements IToken {
	token_type: string;
	expires_at: number;
	expires_in: number;
	refresh_token: string;
	access_token: string;

	constructor(
		tokenType: string = '',
		expiresAt: number = 0,
		expiresIn: number = 0,
		refreshToken: string = '',
		accessToken: string = ''
	) {
		this.token_type = tokenType;
		this.expires_at = expiresAt;
		this.expires_in = expiresIn;
		this.refresh_token = refreshToken;
		this.access_token = accessToken;
	}
}
