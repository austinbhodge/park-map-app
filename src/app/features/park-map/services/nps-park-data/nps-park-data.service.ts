import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NpsParkDataService {
  baseDataEndpoint = 'https://api.nps.gov/api/v1';

  constructor(private http: HttpClient) {}

  getParkList(stateCode: string) {
    const params = new HttpParams({
      fromObject: {
        stateCode,
        fields: 'images,operatingHours',
        api_key: environment.npsAPIKey,
      }
    });

    return this.http.get(`${this.baseDataEndpoint}/parks`, { params })
      .pipe(map((parks: any) => parks.data));
  }

  getPark(parkCode: string) {

    const params = new HttpParams({
      fromObject: {
        parkCode,
        fields: 'images,operatingHours',
        api_key: environment.npsAPIKey,
      }
    });

    return this.http.get(`${this.baseDataEndpoint}/parks`, { params });
  }
}
