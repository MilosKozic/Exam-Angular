import { KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from '../home/home.service';

export interface TableItem {
  id: number;
  name: string;
  email: string;
  phone: number;
  formName: string;
  formStatus: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() dataSource: any= [];
  @Input() actions!: boolean;
  @Input() select!: boolean;
  @Output() viewAction = new EventEmitter<number>();
  @Output() deleteAction = new EventEmitter<number[]>();
  @Input() isLoading!: boolean | null;
  selected$Items:BehaviorSubject<number[]>
  selectedItems: number[] = [];

  constructor(homeService: HomeService){
   this.selected$Items = homeService.selected$Items
  }

  toggleSelection(id: number) {
    const index = this.selectedItems.indexOf(id);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
      this.selected$Items.next([...this.selectedItems])
    } else {
      this.selectedItems.push(id);
      this.selected$Items.next([...this.selectedItems])
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
      this.selected$Items.next([...this.selectedItems])
    } else {
      this.selectedItems = this.dataSource.map((item: any) => item.id);
      this.selected$Items.next([...this.selectedItems])
    }
  }

  onView(id: number) {
    this.viewAction.emit(id)
  }

  onDelete(id: number) {
    this.deleteAction.emit([id])
  }

  onDeleteMulti(data: number[]) {
    this.deleteAction.emit(data)    
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}
