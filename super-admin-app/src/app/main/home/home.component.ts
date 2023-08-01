import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homeService: any;
  constructor(homeService: HomeService) {
    this.homeService = homeService;
  }

  handleDeleteClick(event: number) {
    console.log(event);
  }

  onConfirm(event: any){
    console.log(event);
    if(event) {      
      this.homeService.deleteData(event)    
     }
     this.homeService.isConfirmModalOpen.next(false);  
  }
}
