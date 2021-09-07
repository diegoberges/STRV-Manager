import { IAthlete } from './athlete.interface';
import { IBike } from './bike.interface';
import { IClub } from './club.interface';
export interface IAthleteExtended extends IAthlete {
	can_follow: boolean;
	follower_count: number;
	friend_count: number;
	mutual_friend_count: number;
	athlete_type: number;
	date_preference: string;
	measurement_preference: string;
	clubs: IClub[];
	ftp: number;
	bikes: IBike[];
	shoes: IBike[];
}
