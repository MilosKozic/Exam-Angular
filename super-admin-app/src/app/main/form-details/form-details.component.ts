import { Component } from '@angular/core';
import { FormDetailsResolverService } from './form-details-resolver.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent {
  itemData$: Observable<any>;
  constructor(private formDetailsService: FormDetailsResolverService) {
    this.itemData$ = this.formDetailsService.itemData$
  }

}
