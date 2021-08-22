import { IToken } from '../interfaces/IToken';

export class Token {
	state: string;
	code: string;
	scope: string;

	constructor(state: string = '', code: string = '', scope: string = '') {
		this.state = state;
		this.code = code;
		this.scope = scope;
	}

	isEmpty() {
		return this.state === '' && this.code === '' && this.scope === '';
	}
	// getState(){
	//     return this.state;
	// }

	// setState(state: string){
	//     this.state = state;
	// }

	// getCode(){
	//     return this.code;
	// }

	// setCode(code: string){
	//     this.code = code;
	// }

	// getScope(){
	//     return this.scope;
	// }

	// setScope(scope: string){
	//     this.scope = scope;
	// }
}
