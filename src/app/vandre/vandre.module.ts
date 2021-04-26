import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VandrePageRoutingModule } from './vandre-routing.module';

import { VandrePage } from './vandre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VandrePageRoutingModule
  ],
  declarations: [VandrePage]
})
export class VandrePageModule {}
