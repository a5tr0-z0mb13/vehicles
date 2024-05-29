import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Vehicle, VehicleDetail } from '../../models';
import { MediaClassPipe, MediaSourcePipe } from '../../pipes';

/**
 * Displays a vehicle's details.
 */
@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [MediaClassPipe, MediaSourcePipe],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleComponent {
  @Input() public vehicle!: Vehicle & VehicleDetail;
}
