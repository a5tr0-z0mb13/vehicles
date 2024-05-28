import { TestBed } from '@angular/core/testing';

import { IsVehicleDetailPipe } from './is-vehicle-detail.pipe';

describe('IsVehicleDetailPipe', () => {
  let pipe: IsVehicleDetailPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsVehicleDetailPipe],
    });

    pipe = TestBed.inject(IsVehicleDetailPipe);
  });

  describe('injector', () => {
    it('should provide an instance of the pipe', () => {
      expect(pipe).toBeTruthy();
    });
  });

  describe('transform', () => {
    it('should return true or false depending on whether or not the vehicle has details', () => {
      const specData: { vehicle: unknown; expected: boolean }[] = [
        {
          vehicle: {
            id: 'aa',
            price: '£99,999',
            description: 'Lorem ipsum dolor sit amet',
          },
          expected: true,
        },
        {
          vehicle: {
            price: '£99,999',
            description: 'Lorem ipsum dolor sit amet',
          },
          expected: false,
        },
        {
          vehicle: {
            id: 'aa',
            description: 'Lorem ipsum dolor sit amet',
          },
          expected: false,
        },
        {
          vehicle: {
            id: 'aa',
            price: '£10,000',
          },
          expected: false,
        },
      ];

      specData.forEach(({ vehicle, expected }) => {
        expect(pipe.transform(vehicle)).toEqual(expected);
      });
    });
  });
});
