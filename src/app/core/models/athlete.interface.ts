import { AthleteSummary } from './athlete-summary.interface';
import { Bike } from './bike.interface';
import { Club } from './club.interface';
import { Shoe } from './shoe.interface';

export interface Athlete extends AthleteSummary {
	can_follow: boolean;
	follower_count: number;
	friend_count: number;
	mutual_friend_count: number;
	athlete_type: number;
	date_preference: string;
	measurement_preference: string;
	clubs: Club[];
	ftp: number;
	bikes: Bike[];
	shoes: Shoe[];
}
