import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, finalize, map } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { TableItem } from '../table/table.component';

@Injectable({
  providedIn: 'root',
})
export class FormDetailsResolverService {
  private itemData = new BehaviorSubject<TableItem[]>([]);
  itemData$ = this.itemData.asObservable();

  private isItemDataLoading = new BehaviorSubject<boolean>(false);
  isItemDataLoading$ = this.isItemDataLoading.asObservable();

  private isActionsDataLoading = new BehaviorSubject<boolean>(false);
  isActionsDataLoading$ = this.isActionsDataLoading.asObservable();

  private actionsData = new BehaviorSubject<any>([]);
  private formatActionsData: any = [];
  actionsData$ = this.actionsData.asObservable();

  constructor(private httpService: HttpService, private datePipe: DatePipe) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.paramMap.get('id');
    this.getOneItem(id);
    this.getActions();
  }

  getOneItem(id: any) {
    this.isItemDataLoading.next(true);
    this.httpService.getSingle(id)
    .pipe(finalize(()=>this.isItemDataLoading.next(false)))
    .subscribe((data) => {
      this.itemData.next([data]);
    });
  }

  getActions() {
    this.isActionsDataLoading.next(true)
    this.httpService
      .getActions()
      .pipe(
        map((data) => {
          return (this.formatActionsData = data.map((data: any) => {
            const formattedTime =
              this.datePipe.transform(data.actionStartTime, 'dd/MM/yy HH:mm') ||
              '';
            const timeDifference = this.calculateTimeDifference(
              data.actionStartTime
            );
            const updatedActions = {
              id: data.id,
              actions: data.actions,
              actionsStartTime: formattedTime,
              waitingTime: timeDifference,
            };
            return updatedActions;
          }));
        })
      )
      .subscribe((data) => {
        this.actionsData.next(data);
        this.isActionsDataLoading.next(false)
      });
  }

  calculateTimeDifference(timeInMilliseconds: number): string {
    const currentTime = Date.now();
    const timeDiff = currentTime - timeInMilliseconds;

    const minutes = Math.floor(timeDiff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day(s) ago`;
    } else if (hours > 0) {
      return `${hours} hour(s) ago`;
    } else if (minutes > 0) {
      return `${minutes} minute(s) ago`;
    } else {
      return 'Just now';
    }
  }
}
