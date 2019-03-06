import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NpsParkDataService {
  baseDataEndpoint = 'https://api.nps.gov/api/v1';

  constructor(private http: HttpClient) {}

  getParks() {
    return this.http.get(`${this.baseDataEndpoint}/parks`);
  }
}
