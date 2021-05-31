import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-annonce',
    loadChildren: () => import('./add-annonce/add-annonce.module').then( m => m.AddAnnoncePageModule)
  },
  {
    path: 'add-terrain',
    loadChildren: () => import('./add-terrain/add-terrain.module').then( m => m.AddTerrainPageModule)
  },
  {
    path: 'annonce-detail',
    loadChildren: () => import('./annonce-detail/annonce-detail.module').then( m => m.AnnonceDetailPageModule)
  },
  {
    path: 'edit-annonce',
    loadChildren: () => import('./edit-annonce/edit-annonce.module').then( m => m.EditAnnoncePageModule)
  },
  {
    path: 'edit-terrain',
    loadChildren: () => import('./edit-terrain/edit-terrain.module').then( m => m.EditTerrainPageModule)
  },
  {
    path: 'detail-terrain',
    loadChildren: () => import('./detail-terrain/detail-terrain.module').then( m => m.DetailTerrainPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
