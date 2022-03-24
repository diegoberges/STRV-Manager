import { ActivityType } from '../../enums/activity-type';

export interface SummaryClub {
	id: number;
	resource_state: number;
	name: string;
	profile_medium: string;
	cover_photo: string;
	cover_photo_small: string;
	sport_type: ActivityType;
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
}
