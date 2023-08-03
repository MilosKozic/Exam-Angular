import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { HomeComponent } from './home/home.component';
import { FormDetailsResolver } from './form-details/form-details-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path:'form', component: HomeComponent
      },
      {
        path:'details/:id', component: FormDetailsComponent, resolve:[FormDetailsResolver]
      }
    ],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
