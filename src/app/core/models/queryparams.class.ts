import { IQueryParams } from './queryparams.interface';
export class QueryParams implements IQueryParams {
	state: string;
	code: string;
	scope: string;

	constructor(state = '', code = '', scope = '') {
		this.state = state;
		this.code = code;
		this.scope = scope;
	}
}
