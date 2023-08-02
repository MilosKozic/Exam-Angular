import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormDetailsResolverService } from './form-details-resolver.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDetailsComponent {
  itemData$: Observable<any>;
  actionsData$: Observable<any>;

  constructor(private formDetailsService: FormDetailsResolverService) {
    this.itemData$ = this.formDetailsService.itemData$;
    this.actionsData$ = this.formDetailsService.actionsData$;
  }

}
