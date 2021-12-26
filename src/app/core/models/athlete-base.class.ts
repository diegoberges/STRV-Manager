export class AthleteBase {
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
	constructor(athlete?: AthleteBase) {
		if (athlete != null) {
			this.id = athlete.id;
			this.username = athlete.username;
			this.resource_state = athlete.resource_state;
			this.firstname = athlete.firstname;
			this.lastname = athlete.lastname;
			this.bio = athlete.bio;
			this.city = athlete.city;
			this.state = athlete.state;
			this.country = athlete.country;
			this.sex = athlete.sex;
			this.premium = athlete.premium;
			this.summit = athlete.summit;
			this.created_at = athlete.created_at;
			this.updated_at = athlete.updated_at;
			this.badge_type_id = athlete.badge_type_id;
			this.weight = athlete.weight;
			this.profile_medium = athlete.profile_medium;
			this.profile = athlete.profile;
			this.friend = athlete.friend;
			this.follower = athlete.follower;
		}
	}
}
