import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormeServicePageRoutingModule } from './forme-service-routing.module';

import { FormeServicePage } from './forme-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormeServicePageRoutingModule
  ],
  declarations: [FormeServicePage]
})
export class FormeServicePageModule {}
