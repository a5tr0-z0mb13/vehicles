import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { VehicleDetail } from '../models';

/**
 * Vehicle details API service
 */
@Injectable({
  providedIn: 'root',
})
export class VehicleDetailsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Returns a vehicle's details, by id from the /vehicles/{id} API endpoint
   * @param id The vehicle id.
   * @returns The vehicle's details
   */
  public get(id: string): Observable<VehicleDetail> {
    const url: string = `${environment.vehicles.api.url}${id}`;

    return this.httpClient.get<VehicleDetail>(url);
  }
}
