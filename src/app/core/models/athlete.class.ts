import { AthleteBase } from './athlete-base.class';
import { Bike } from './bike.class';
import { Club } from './club.class';
import { Shoe } from './shoe.class';

export class Athlete extends AthleteBase {
	can_follow: boolean = false;
	follower_count: number = 0;
	friend_count: number = 0;
	mutual_friend_count: number = 0;
	athlete_type: number = 0;
	date_preference: string = '';
	measurement_preference: string = '';
	clubs: Club[] = new Array<Club>();
	ftp: number = 0;
	bikes: Bike[] = new Array<Bike>();
	shoes: Shoe[] = new Array<Shoe>();

	constructor(athlete?: Athlete) {
		super(athlete);

		if (athlete != null) {
			this.can_follow = athlete.can_follow;
			this.follower_count = athlete.follower_count;
			this.friend_count = athlete.friend_count;
			this.mutual_friend_count = athlete.mutual_friend_count;
			this.athlete_type = athlete.athlete_type;
			this.date_preference = athlete.date_preference;
			this.measurement_preference = athlete.measurement_preference;
			// this.clubs = new Array<Club>(...athlete.clubs);
			this.clubs = athlete.clubs;
			this.ftp = athlete.ftp;
			this.bikes = new Array<Bike>(...athlete.bikes);
			this.shoes = new Array<Shoe>(...athlete.shoes);
		}
	}
}
