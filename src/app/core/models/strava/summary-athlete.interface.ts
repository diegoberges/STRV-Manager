import { ResourceState, Sex } from '../../enums/index';

export interface SummaryAthlete {
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
}
