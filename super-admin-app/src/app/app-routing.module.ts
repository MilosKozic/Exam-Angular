import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MainGuard } from './guards/main.,guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch:'full' },
  {
    path: 'auth',
    canActivate:[AuthGuard],
    loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    canActivate:[MainGuard],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
