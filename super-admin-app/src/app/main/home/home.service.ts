import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableItem } from '../table/table.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private itemsData = new BehaviorSubject<TableItem[]>([]);
  itemsData$: TableItem[] | any = this.itemsData.asObservable();
  isConfirmModalOpen = new BehaviorSubject<boolean>(false);
  itemsForDelete = new BehaviorSubject<[]>([]);
  dataForDelete: any;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private httpService: HttpService
  ) {
    this.getItems();
  }

  getItems(): void {
    this.httpService.get().subscribe((data) => {
      this.itemsData.next(data);
    });
  }

  handleViewClick(id: number) {
    this.router.navigate(['/home/details', id]);
  }

  handleDeleteClick(ids: number[]) {
    this.isConfirmModalOpen.next(true);
    this.dataForDelete = ids;
  }

  deleteData(event: boolean) {
    if (event) {
      let dataFromServer = this.itemsData.value;
      dataFromServer = dataFromServer.filter(
        (item: any) => !this.dataForDelete?.includes(item.id)
      );
      this.itemsData.next([...dataFromServer]);
      this.toastr.success('successfully deleted');
      // i do not have API for delete
      // real logic will be to trigger delete method from service, send in body object or objects we want to delete,
      //  and if object are deleted show message to user that data is successfull deleted
    }
  }
}
