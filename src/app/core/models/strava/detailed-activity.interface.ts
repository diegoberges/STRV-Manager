import { ActivityType } from '../../enums';
import { DetailedSegmentEffort } from './detailed-segment-effort.interface';
import { Lap } from './lap.interface';
import { MetaAthlete } from './meta-athlete.interface';
import { PhotoSummary } from './photo-summary.interface';
import { PolylineMap } from './polyline-map.inteface';
import { Split } from './split.interface';
import { SummaryGear } from './summary-gear.interface';

export interface DetailedActivity {
  id: number;
  external_id: string;
  upload_id: number;
  athlete: MetaAthlete;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  elev_high: number;
  elev_low: number;
  type: ActivityType;
  start_date: Date;
  start_date_local: Date;
  timezone: string;
  start_latlng: number[];
  end_latlng: number[];
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  total_photo_count: number;
  map: PolylineMap;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  flagged: boolean;
  upload_id_str: string;
  workout_type: number;
  average_speed: number;
  max_speed: number;
  has_kudoed: boolean;
  hide_from_home: boolean;
  gear_id: string;
  kilojoules: number;
  average_watts: number;
  device_watts: boolean;
  max_watts: number;
  weighted_average_watts: number;
  description: string;
  photos: PhotoSummary;
  gear: SummaryGear;
  calories: number;
  segment_efforts: DetailedSegmentEffort[];
  device_name: string;
  embed_token: string;
  splits_metric: Split;
  splits_standard: Split;
  laps: Lap[];
  best_efforts: DetailedSegmentEffort[];
}
