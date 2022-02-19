import { TypeObject } from '../enums/type-object';

export interface Club {
	id: number;
	resource_state: number;
	name: string;
	profile_medium: string;
	profile: string;
	cover_photo?: null | string;
	cover_photo_small?: null | string;
	sport_type: string;
	city: string;
	state: string;
	country: string;
	private: boolean;
	member_count: number;
	featured: boolean;
	verified: boolean;
	url: string;
	membership: string;
	admin: boolean;
	owner: boolean;
	type: TypeObject;
}
