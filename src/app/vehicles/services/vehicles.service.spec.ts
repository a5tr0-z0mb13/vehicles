import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { VehiclesService } from './vehicles.service';

describe('VehiclesService', () => {
  let service: VehiclesService;

  let httpClient: HttpClient;
  let get: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiclesService],
    });

    service = TestBed.inject(VehiclesService);

    httpClient = TestBed.inject(HttpClient);
    get = spyOn(httpClient, 'get');
  });

  describe('injector', () => {
    it('should provide an instance of the service', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('list', () => {
    it('should call the /vehicles API endpoint', () => {
      const regExp: RegExp = /\/vehicles\/$/;

      service.list();

      expect(get).toHaveBeenCalledWith(jasmine.stringMatching(regExp));
    });
  });
});
