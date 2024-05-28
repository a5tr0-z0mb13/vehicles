import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { of } from 'rxjs';

import {
  IsVehicleDetailPipe,
  MediaClassPipe,
  MediaSourcePipe,
} from '../../pipes';
import { VehicleDetailsService, VehiclesService } from '../../services';
import { VehiclesContainerComponent } from './vehicles-container.component';
import { expected, vehicleDetails, vehicles } from '../../spec-data';

describe('VehiclesContainerComponent', () => {
  let component: VehiclesContainerComponent;
  let fixture: ComponentFixture<VehiclesContainerComponent>;

  let vehicleDetailsService: VehicleDetailsService;
  let get: jasmine.Spy;

  let vehiclesService: VehiclesService;
  let list: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        IsVehicleDetailPipe,
        MediaClassPipe,
        MediaSourcePipe,
        VehiclesContainerComponent,
      ],
      providers: [VehicleDetailsService, VehiclesService],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesContainerComponent);
    component = fixture.componentInstance;

    vehicleDetailsService = TestBed.inject(VehicleDetailsService);
    get = spyOn(vehicleDetailsService, 'get');

    vehiclesService = TestBed.inject(VehiclesService);
    list = spyOn(vehiclesService, 'list');
  }));

  describe('compiler', () => {
    it('should create an instance of the component', () => {
      list = list.and.returnValue(of(vehicles));

      get = get.and.callFake((id: string) => {
        return of(vehicleDetails[id]);
      });

      fixture.detectChanges();

      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit', () => {
    it('should ...', () => {
      list = list.and.returnValue(of(vehicles));

      get = get.and.callFake((id: string) => {
        return of(vehicleDetails[id]);
      });

      fixture.detectChanges();

      expect(list).toHaveBeenCalled();
      expect(get).toHaveBeenCalledTimes(3);

      expect(component.vehicles).toEqual(expected);
    });
  });
});
