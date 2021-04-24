import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCniPageRoutingModule } from './detail-cni-routing.module';

import { DetailCniPage } from './detail-cni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCniPageRoutingModule
  ],
  declarations: [DetailCniPage]
})
export class DetailCniPageModule {}
