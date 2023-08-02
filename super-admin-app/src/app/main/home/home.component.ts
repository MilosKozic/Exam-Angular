import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  homeService: HomeService;
  constructor(homeService: HomeService) {
    this.homeService = homeService;
  }


  // if i had real API i would add here filter, with debouncer
  // it would be something like this method
  // this is dummy example

  // this.searchSubscription = this.searchSubject
  // .pipe(
  //   debounceTime(500),
  //   distinctUntilChanged(),
  //   switchMap((searchQuery) => this.searchService.search(searchQuery))
  // )
  // .subscribe((results) => (this.searchResults = results));

  onConfirm(event: any){
    if(event) {      
      this.homeService.deleteData(event)    
     }
     this.homeService.isConfirmModalOpen.next(false);  
  }
}
