export class DTOAuthorization {
    private _state: string;
    private _code:  string;
    private _scope: string;

    constructor(state: string = "", code: string = "", scope: string = ""){
        this._state = state
        this._code = code
        this._scope = scope;
    }

    getState(){
        return this._state;
    }

    setState(state: string){
        this._state = state;
    }

    getCode(){
        return this._code;
    }

    setCode(code: string){
        this._code = code;
    }

    getScope(){
        return this._scope;
    }

    setScope(scope: string){
        this._scope = scope;
    }
}
