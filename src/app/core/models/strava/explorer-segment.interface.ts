export interface ExplorerSegment {
  id: number;
  name: string;
  climb_category: number;
  climb_category_desc: string;
  avg_grade: number;
  start_latlng: number[];
  end_latlng: number[];
  elev_difference: number;
  distance: number;
  points: string;
}
