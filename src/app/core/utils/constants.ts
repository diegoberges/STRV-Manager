export class Constants {
	//#region Share
	static readonly STATE = 'state';
	static readonly CODE = 'code';
	static readonly SCOPE = 'scope';
	static readonly STRICT = 'Strict';
	static readonly STRV_OAUTH = 'https://www.strava.com/oauth'; // TODO Ojo que esto estaba puesto como htt
	static readonly STRV_API = 'https://www.strava.com/api/v3';

	static readonly ENDPOINT_AUTHORIZE = '/authorize';
	static readonly ENDPOINT_TOKEN = '/token';
	static readonly ENDPOINT_DEAUTHORIZE = '/deauthorize';
	static readonly CLIENT_ID = 'client_id';
	static readonly CLIENT_SECRET = 'client_secret';
	static readonly REDIRECT_URI = 'redirect_uri';
	static readonly RESPONSE_TYPE = 'response_type';
	static readonly APPROVAL_PROMPT = 'approval_prompt';
	static readonly AUTO = 'auto';
	static readonly FORCE = 'force';
	static readonly SCOPE_PARAMS =
		'read,read_all,profile:read_all,activity:read,activity:read_all';
	static readonly LOGIN = 'login';
	static readonly GRANT_TYPE = 'grant_type';
	static readonly AUTHORIZATION_CODE = 'authorization_code';
	static readonly HTTP_HEADERS_CONTENT_TYPE = 'Content-Type';
	static readonly HTTP_HEADERS_X_WWW_FORM_URLENCODED =
		'application/x-www-form-urlencoded';
	static readonly AUTHORIZATION = 'Authorization';
	//#endregion

	//#region Athlete
	static readonly ENDPOINT_ATHLETE = '/athlete';
	static readonly ENDPOINT_ZONES = '/athlete/zones';
	//#endregion
}
