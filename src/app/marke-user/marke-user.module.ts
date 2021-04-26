import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkeUserPageRoutingModule } from './marke-user-routing.module';

import { MarkeUserPage } from './marke-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkeUserPageRoutingModule
  ],
  declarations: [MarkeUserPage]
})
export class MarkeUserPageModule {}
