export interface IToken {
	tokenType: string;
	expiresAt: number;
	expiresIn: number;
	refreshToken: string;
	accessToken: string;
}
