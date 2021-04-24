import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormeProductPage } from './forme-product.page';

const routes: Routes = [
  {
    path: '',
    component: FormeProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormeProductPageRoutingModule {}
