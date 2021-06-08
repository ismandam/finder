import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./home/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'diplome',
    loadChildren: () => import('./diplome/diplome.module').then( m => m.DiplomePageModule)
  },
  {
    path: 'permis',
    loadChildren: () => import('./permis/permis.module').then( m => m.PermisPageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('./market/market.module').then( m => m.MarketPageModule)
  },
  {
    path: 'detail-cni',
    loadChildren: () => import('./detail-cni/detail-cni.module').then( m => m.DetailCniPageModule)
  },
  {
    path: 'detail-market',
    loadChildren: () => import('./detail-market/detail-market.module').then( m => m.DetailMarketPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'form-register',
    loadChildren: () => import('./form-register/form-register.module').then( m => m.FormRegisterPageModule)
  },
  {
    path: 'form-login',
    loadChildren: () => import('./form-login/form-login.module').then( m => m.FormLoginPageModule)
  },
  {
    path: 'forme-product',
    loadChildren: () => import('./forme-product/forme-product.module').then( m => m.FormeProductPageModule)
  },
  {
    path: 'log-out',
    loadChildren: () => import('./log-out/log-out.module').then( m => m.LogOutPageModule)
  },
  {
    path: 'vandre',
    loadChildren: () => import('./vandre/vandre.module').then( m => m.VandrePageModule)
  },
  
  {
    path: 'add-cni',
    loadChildren: () => import('./add-cni/add-cni.module').then( m => m.AddCniPageModule)
  },
  {
    path: 'cart-form',
    loadChildren: () => import('./cart-form/cart-form.module').then( m => m.CartFormPageModule)
  },
  {
    path: 'forme-service',
    loadChildren: () => import('./forme-service/forme-service.module').then( m => m.FormeServicePageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
