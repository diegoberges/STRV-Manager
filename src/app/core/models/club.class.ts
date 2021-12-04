export class Club {
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

	constructor() {
		this.id = 0;
		this.resource_state = 0;
		this.name = '';
		this.profile_medium = '';
		this.profile = '';
		this.cover_photo = null;
		this.cover_photo_small = null;
		this.sport_type = '';
		this.city = '';
		this.state = '';
		this.country = '';
		this.private = false;
		this.member_count = 0;
		this.featured = false;
		this.verified = false;
		this.url = '';
		this.membership = '';
		this.admin = false;
		this.owner = false;
	}
}
