import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartFormPageRoutingModule } from './cart-form-routing.module';

import { CartFormPage } from './cart-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartFormPageRoutingModule
  ],
  declarations: [CartFormPage]
})
export class CartFormPageModule {}
