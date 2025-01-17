import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:50771/api";

  constructor(private http: HttpClient) { }

  getRegList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/regions');
  }
  getStaList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/stations');
  }
  getAlaList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/alarms');
  }
  getForList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/forecasts');
  }
  getAlaRegList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/regionsAlarms');
  }
  getAlaStaList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/stationsAlarms');
  }
  getDateOfUpdateList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/forecasts');
  }
  getChartDataSet(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Alarms');
  }

  getChartDataSetSecondary(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Graphs');
  }


}
