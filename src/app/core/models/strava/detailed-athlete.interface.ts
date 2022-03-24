import { SummaryClub } from './summary-club.interface';
import { ResourceState, UnitSystem, Sex } from '../../enums';
import { SummaryGear } from './summary-gear.interface';

export interface DetailedAthlete {
	id: number;
	resource_state: ResourceState;
	firstname: string;
	lastname: string;
	profile_medium: string;
	profile: string;
	city: string;
	state: string;
	country: string;
	sex: Sex;
	premium: boolean;
	summit: boolean;
	created_at: Date;
	updated_at: Date;
	follower_count: number;
	friend_count: number;
	measurement_preference: UnitSystem;
	ftp: number;
	weight: number;
	clubs: SummaryClub;
	bikes: SummaryGear;
	shoes: SummaryGear;
}
