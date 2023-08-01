import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormDetailsResolverService {
  itemData = new BehaviorSubject<any>([]);
  itemData$ = this.itemData.asObservable()
  private apiUrl = 'https://64c94d56b2980cec85c21f8c.mockapi.io/admin'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.paramMap.get('id');
    this.getOneItem(id).subscribe((data) => {
      this.itemData.next([data]);
    });
  }

  getOneItem(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }
}
