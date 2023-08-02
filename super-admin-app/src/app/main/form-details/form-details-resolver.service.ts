import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class FormDetailsResolverService {
  itemData = new BehaviorSubject<any>([]);
  itemData$ = this.itemData.asObservable();

  constructor(private httpService: HttpService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.paramMap.get('id');
    this.getOneItem(id);
  }

  getOneItem(id: any) {
    this.httpService.getSingle(id).subscribe((data) => {
      this.itemData.next([data]);
    });
  }
}
