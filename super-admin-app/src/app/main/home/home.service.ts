import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableItem } from '../table/table.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private itemsData = new BehaviorSubject<TableItem[]>([]);
  itemsData$: TableItem[] | any = this.itemsData.asObservable();
  isConfirmModalOpen = new BehaviorSubject<boolean>(false)
  itemsForDelete = new BehaviorSubject<[]>([]);
  dataForDelete: any;

  private apiUrl = 'https://64c94d56b2980cec85c21f8c.mockapi.io/admin'; // Replace with your API endpoint URL

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
    this.getItems().subscribe(data=>{
        this.itemsData.next(data)
    })
   }

  getItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  handleViewClick(id: number) {
    this.router.navigate(['/home/details',id])
  }

  handleDeleteClick(ids:number[]) {
     this.isConfirmModalOpen.next(true)
     this.dataForDelete = ids;
  }

  deleteData(event: boolean) {
         if(event) {     
            let dataFromServer = this.itemsData.value 
            dataFromServer = dataFromServer.filter((item: any) => !this.dataForDelete?.includes(item.id));
            this.itemsData.next([...dataFromServer])
            this.toastr.success('successfully deleted')
      // i do not have API for delete
      // real logic will be to trigger delete method from service, send in body object or objects we want to delete,
      //  and if object are deleted show message to user that data is successfull deleted      
     }
  }
}
