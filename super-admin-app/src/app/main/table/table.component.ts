import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TableItem {
  id: number;
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() dataSource: TableItem[] = [];
  selItems = new BehaviorSubject<number[]>([])
  selectedItems: number[] = [];
  isConfirmDialogOpen = false;
  itemsForDelete: any;

  toggleSelection(id: number) {
    const index = this.selectedItems.indexOf(id);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
      this.selItems.next([...this.selectedItems])
    } else {
      this.selectedItems.push(id);
      this.selItems.next([...this.selectedItems])
    }    
  }

  isItemSelected(id: number): boolean {
    return this.selectedItems.indexOf(id) !== -1;
  }

  isAllSelected(): boolean {
    return this.dataSource.length === this.selectedItems.length;
  }

  toggleAllSelection() {
    if (this.isAllSelected()) {
      this.selectedItems = [];
      this.selItems.next([...this.selectedItems])
    } else {
      this.selectedItems = this.dataSource.map((item) => item.id);
      this.selItems.next([...this.selectedItems])
    }
  }

  onView(id: number) {
    console.log('View item with ID:', id);
  }

  onDelete(id: number) {
    this.isConfirmDialogOpen = true;
    this.itemsForDelete = [id]
  }

  onDeleteMulti(data: any) {
    this.isConfirmDialogOpen = true;    
    this.itemsForDelete = data;
  }

  onConfirm(event:boolean) {
     if(event) {      
      this.dataSource = this.dataSource.filter((item) => !this.itemsForDelete?.includes(item.id));
      console.log(this.dataSource,'data');
      
     }
     this.isConfirmDialogOpen = false;  
  }
}
