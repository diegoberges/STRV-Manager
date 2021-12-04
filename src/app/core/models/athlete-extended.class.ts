import { Athlete } from './athlete.class';
import { Bike } from './bike.class';
import { Club } from './club.class';
export class AthleteExtended extends Athlete {
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
	shoes: Bike[];

	constructor() {
		super();

		this.can_follow = false;
		this.follower_count = 0;
		this.friend_count = 0;
		this.mutual_friend_count = 0;
		this.athlete_type = 0;
		this.date_preference = '';
		this.measurement_preference = '';
		this.clubs = [];
		this.ftp = 0;
		this.bikes = [];
		this.shoes = [];
	}
}
