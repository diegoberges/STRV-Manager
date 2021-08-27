import { IAthlete } from './athlete.interface';
export class Athlete implements IAthlete {
	id: number;
	username: string;
	resource_state: number;
	firstname: string;
	lastname: string;
	bio: null;
	city: string;
	state: string;
	country: string;
	sex: string;
	premium: boolean;
	summit: boolean;
	created_at: Date;
	updated_at: Date;
	badge_type_id: number;
	weight: number;
	profile_medium: string;
	profile: string;
	friend: null;
	follower: null;

	constructor() {
		this.id = 0;
		this.username = '';
		this.resource_state = 0;
		this.firstname = '';
		this.lastname = '';
		this.bio = null;
		this.city = '';
		this.state = '';
		this.country = '';
		this.sex = '';
		this.premium = false;
		this.summit = false;
		this.created_at = new Date();
		this.updated_at = new Date();
		this.badge_type_id = 0;
		this.weight = 0;
		this.profile_medium = '';
		this.profile = '';
		this.friend = null;
		this.follower = null;
	}
}
