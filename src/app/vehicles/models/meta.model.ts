import { BodyStyle } from './body-style.model';
import { DriveTrain } from './drive-train.model';
import { Emissions } from './emissions.model';

export interface Meta {
  passengers: number;
  drivetrain: DriveTrain[];
  bodystyles: BodyStyle[];
  emissions: Emissions;
}
