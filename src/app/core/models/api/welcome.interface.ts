import { SummaryAthlete } from './../strava/summary-athlete.interface';

export interface Welcome {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: SummaryAthlete;
}
