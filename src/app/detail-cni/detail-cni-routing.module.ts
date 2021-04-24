import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCniPage } from './detail-cni.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCniPageRoutingModule {}
