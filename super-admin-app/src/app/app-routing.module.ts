import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './users/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
