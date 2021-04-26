import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkeUserPage } from './marke-user.page';

const routes: Routes = [
  {
    path: '',
    component: MarkeUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkeUserPageRoutingModule {}
