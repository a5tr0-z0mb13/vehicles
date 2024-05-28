import { Component, Input } from '@angular/core';
import { Vehicle, VehicleDetail } from '../../models';
import { NgFor, NgIf } from '@angular/common';
import {
  IsVehicleDetailPipe,
  MediaClassPipe,
  MediaSourcePipe,
} from '../../pipes';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [IsVehicleDetailPipe, MediaClassPipe, MediaSourcePipe, NgFor, NgIf],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss',
})
export class VehicleComponent {
  @Input() public vehicle!: Vehicle & VehicleDetail;
}
