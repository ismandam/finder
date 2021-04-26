import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VandrePage } from './vandre.page';

const routes: Routes = [
  {
    path: '',
    component: VandrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VandrePageRoutingModule {}
