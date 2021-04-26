import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCniPage } from './add-cni.page';

const routes: Routes = [
  {
    path: '',
    component: AddCniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCniPageRoutingModule {}
