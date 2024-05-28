import { Pipe, PipeTransform } from '@angular/core';

import { VehicleDetail } from '../models';

/**
 * VehicleDetail type guard. Returns true or false depending on whether or not the vehicle has details.
 */
@Pipe({
  name: 'isVehicleDetail',
  standalone: true,
})
export class IsVehicleDetailPipe implements PipeTransform {
  transform(vehicle: unknown): vehicle is VehicleDetail {
    return (
      (vehicle as VehicleDetail).id !== undefined &&
      (vehicle as VehicleDetail).price !== undefined &&
      (vehicle as VehicleDetail).description !== undefined
    );
  }
}
