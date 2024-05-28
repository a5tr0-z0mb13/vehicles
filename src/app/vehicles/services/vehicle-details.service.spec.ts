import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { VehicleDetailsService } from './vehicle-details.service';

describe('VehicleDetailsService', () => {
  let service: VehicleDetailsService;

  let httpClient: HttpClient;
  let get: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehicleDetailsService],
    });

    service = TestBed.inject(VehicleDetailsService);

    httpClient = TestBed.inject(HttpClient);
    get = spyOn(httpClient, 'get');
  });

  describe('injector', () => {
    it('should provide an instance of the service', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('get', () => {
    it('should call the /vehicles/{id} API endpoint', () => {
      const regExp: RegExp = /\/vehicles\/aa$/;

      service.get('aa');

      expect(get).toHaveBeenCalledWith(jasmine.stringMatching(regExp));
    });
  });
});
