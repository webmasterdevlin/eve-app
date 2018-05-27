import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from './City';

@Injectable()
export class LocationService {
  private url = "http://localhost:3000/locations/";
  constructor(private http: HttpClient) { }

  getCity(city: string): Observable<City> {
    return this.http.get<City>(`${this.url}${city}`);
  }

}
