import { SummaryAthlete } from './summary-athlete.interface';

export interface Comment {
	id: number;
	activity_id: number;
	text: string;
	athlete: SummaryAthlete;
	created_at: Date;
}
