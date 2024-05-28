import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Vehicle } from '../models';

/**
 * Vehicle API service
 */
@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Returns a list of vehicles from the /vehicles API endpoint
   * @returns A list of vehicles
   */
  public list(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(environment.vehicles.api.url);
  }
}
