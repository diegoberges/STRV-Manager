import { SummaryClub } from './../strava/summary-club.interface';

//TODO Sacarlo a un fichero de constantes para usarlo en todos los ficheros
type Contenido = SummaryClub; //| Shoe | Bike;

export interface Panel {
  disabled: boolean;
  name: string;
  content: Contenido[];
}
