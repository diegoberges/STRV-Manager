import { TypeObject } from '../enums/type-object';

export class Club {
	id: number = 0;
	resource_state: number = 0;
	name: string = '';
	profile_medium: string = '';
	profile: string = '';
	cover_photo?: null | string = '';
	cover_photo_small?: null | string = '';
	sport_type: string = '';
	city: string = '';
	state: string = '';
	country: string = '';
	private: boolean = false;
	member_count: number = 0;
	featured: boolean = false;
	verified: boolean = false;
	url: string = '';
	membership: string = '';
	admin: boolean = false;
	owner: boolean = false;
	type: TypeObject = TypeObject.Club;
	constructor() {
		// if (Array.isArray(club)) {
		// 	club.forEach((item) => this.createClub(item));
		// }
		// if (Array.isArray(club)) {
		// 	club.forEach((club) => {
		// 		this.id = club.id;
		// 		this.resource_state = club.resource_state;
		// 		this.name = club.name;
		// 		this.profile_medium = club.profile_medium;
		// 		this.profile = club.profile;
		// 		this.cover_photo = club.cover_photo;
		// 		this.cover_photo_small = club.cover_photo_small;
		// 		this.sport_type = club.sport_type;
		// 		this.city = club.city;
		// 		this.state = club.state;
		// 		this.country = club.country;
		// 		this.private = club.private;
		// 		this.member_count = club.member_count;
		// 		this.featured = club.featured;
		// 		this.verified = club.verified;
		// 		this.url = club.url;
		// 		this.membership = club.membership;
		// 		this.admin = club.admin;
		// 		this.owner = club.owner;
		// 	});
		// }
		// if (club != null) {
		// }
	}
	// private createClub(club: Club): void {
	// 	if (club != null) {
	// 		this.id = club.id;
	// 		this.resource_state = club.resource_state;
	// 		this.name = club.name;
	// 		this.profile_medium = club.profile_medium;
	// 		this.profile = club.profile;
	// 		this.cover_photo = club.cover_photo;
	// 		this.cover_photo_small = club.cover_photo_small;
	// 		this.sport_type = club.sport_type;
	// 		this.city = club.city;
	// 		this.state = club.state;
	// 		this.country = club.country;
	// 		this.private = club.private;
	// 		this.member_count = club.member_count;
	// 		this.featured = club.featured;
	// 		this.verified = club.verified;
	// 		this.url = club.url;
	// 		this.membership = club.membership;
	// 		this.admin = club.admin;
	// 		this.owner = club.owner;
	// 	}
	// }
}
