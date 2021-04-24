import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormeProductPageRoutingModule } from './forme-product-routing.module';

import { FormeProductPage } from './forme-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormeProductPageRoutingModule
  ],
  declarations: [FormeProductPage]
})
export class FormeProductPageModule {}
