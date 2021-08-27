export interface IAthlete {
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
}
