export interface IAthlete {
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
}
