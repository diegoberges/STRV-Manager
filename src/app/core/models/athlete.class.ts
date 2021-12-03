import { IAthlete } from './athlete.interface';
export class Athlete implements IAthlete {
	id: number = 0;
	username: string = '';
	resource_state: number = 0;
	firstname: string = '';
	lastname: string = '';
	bio: string = '';
	city: string = '';
	state: string = '';
	country: string = '';
	sex: string = '';
	premium: boolean = false;
	summit: boolean = false;
	created_at: Date = new Date();
	updated_at: Date = new Date();
	badge_type_id: number = 0;
	weight: number = 0;
	profile_medium: string = '';
	profile: string = '';
	friend: null = null;
	follower: null = null;

	// constructor() {
	// 	this.id = 0;
	// 	this.username = '';
	// 	this.resource_state = 0;
	// 	this.firstname = '';
	// 	this.lastname = '';
	// 	this.bio = null;
	// 	this.city = '';
	// 	this.state = '';
	// 	this.country = '';
	// 	this.sex = '';
	// 	this.premium = false;
	// 	this.summit = false;
	// 	this.created_at = new Date();
	// 	this.updated_at = new Date();
	// 	this.badge_type_id = 0;
	// 	this.weight = 0;
	// 	this.profile_medium = '';
	// 	this.profile = '';
	// 	this.friend = null;
	// 	this.follower = null;
	// }
}
