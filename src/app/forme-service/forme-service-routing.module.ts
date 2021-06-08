import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormeServicePage } from './forme-service.page';

const routes: Routes = [
  {
    path: '',
    component: FormeServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormeServicePageRoutingModule {}
