import { PolylineMap } from './polyline-map.inteface';
import { SummaryAthlete } from './summary-athlete.interface';
import { SummarySegment } from './summary-segment.interface';
export interface Route {
	athlete: SummaryAthlete;
	description: string;
	distance: number;
	elevation_gain: number;
	id: number;
	id_str: string;
	map: PolylineMap;
	name: string;
	private: boolean;
	starred: boolean;
	timestamp: number;
	type: number; // TODO Cambiar por un enum
	sub_type: number; // TODO Cambiar por un enum
	created_at: Date;
	updated_at: Date;
	estimated_moving_time: number;
	segments: SummarySegment;
}
