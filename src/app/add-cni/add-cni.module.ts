import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCniPageRoutingModule } from './add-cni-routing.module';

import { AddCniPage } from './add-cni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCniPageRoutingModule
  ],
  declarations: [AddCniPage]
})
export class AddCniPageModule {}
