import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { catchError, concatMap, forkJoin, map, of } from 'rxjs';

import { Vehicle, VehicleDetail } from '../../models';
import { IsVehicleDetailPipe } from '../../pipes';
import { VehicleDetailsService, VehiclesService } from '../../services';
import { VehicleComponent } from '../vehicle/vehicle.component';

/**
 * Displays a list of vehicles / vehicle details.
 *
 * TODO Implement error handling.
 */
@Component({
  standalone: true,
  imports: [IsVehicleDetailPipe, VehicleComponent],
  templateUrl: './vehicles-container.component.html',
  styleUrl: './vehicles-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehiclesContainerComponent implements OnInit {
  public vehicles?: (Vehicle & VehicleDetail)[];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private vehiclesService: VehiclesService,
    private vehicleDetailsService: VehicleDetailsService
  ) {}

  public ngOnInit(): void {
    // Inner observables retrieve the details of each vehicle
    const callbackFn = (vehicle: Vehicle) => {
      return this.vehicleDetailsService.get(vehicle.id).pipe(
        map((vehicleDetail: VehicleDetail) =>
          Object.assign({}, vehicle, vehicleDetail)
        ),
        /**
         * If any inner observables passed to forkJoin error,
         * you lose the value of any observables that would or have already completed
         * if you do not catch the error correctly on the inner observable.
         */
        catchError(error => of(error))
      );
    };

    // Outer observable retrieves an array of vehicles
    this.vehiclesService
      .list()
      .pipe(
        /**
         * concatMap the outer observable to forkJoin.
         * This operator is best user when you have a group of observables
         * and only care about the final emitted value of each.
         */
        concatMap((vehicles: Vehicle[]) => forkJoin(vehicles.map(callbackFn)))
      )
      .subscribe((vehicles: (Vehicle & VehicleDetail)[]) => {
        this.vehicles = vehicles;
        this.changeDetectorRef.detectChanges();
      });
  }
}
