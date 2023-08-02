import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private API_URL = 'https://64c94d56b2980cec85c21f8c.mockapi.io/';
  private ENDPOINT = 'admin'; //
  private ACTION_ENDPOINT = 'actionTime';

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(`${this.API_URL}/${this.ENDPOINT}`);
  }
  
  getSingle(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${this.ENDPOINT}/${id}`);
  }

  getActions(): Observable<any> {
    return this.http.get(`${this.API_URL}/${this.ACTION_ENDPOINT}`);
  }
}
