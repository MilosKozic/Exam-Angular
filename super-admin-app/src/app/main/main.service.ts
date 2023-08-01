import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = 'https://64c94d56b2980cec85c21f8c.mockapi.io/admin'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  // Method to get data from the server
  getItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getOneItem(id: any): Observable<any>{
    return this.http.get<any>(this.apiUrl+id)
  }
}