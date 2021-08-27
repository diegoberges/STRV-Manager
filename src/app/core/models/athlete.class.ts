import { IAthlete } from './athlete.interface';
export class Athlete implements IAthlete {
	id: number;
	username: string;
	resourceState: number;
	firstname: string;
	lastname: string;
	bio: null;
	city: string;
	state: string;
	country: string;
	sex: string;
	premium: boolean;
	summit: boolean;
	createdAt: Date;
	updatedAt: Date;
	badgeTypeID: number;
	weight: number;
	profileMedium: string;
	profile: string;
	friend: null;
	follower: null;

	constructor() {
		this.id = 0;
		this.username = '';
		this.resourceState = 0;
		this.firstname = '';
		this.lastname = '';
		this.bio = null;
		this.city = '';
		this.state = '';
		this.country = '';
		this.sex = '';
		this.premium = false;
		this.summit = false;
		this.createdAt = new Date();
		this.updatedAt = new Date();
		this.badgeTypeID = 0;
		this.weight = 0;
		this.profileMedium = '';
		this.profile = '';
		this.friend = null;
		this.follower = null;
	}
}
