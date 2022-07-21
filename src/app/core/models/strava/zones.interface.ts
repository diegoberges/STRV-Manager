import { HeartRateZoneRanges } from './heart-rate-zone-ranges.interface';
import { PowerZoneRanges } from './power-zone-ranges.interface';

export interface Zones {
  heart_rate: HeartRateZoneRanges;
  power: PowerZoneRanges;
}
