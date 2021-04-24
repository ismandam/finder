import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMarketPageRoutingModule } from './detail-market-routing.module';

import { DetailMarketPage } from './detail-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMarketPageRoutingModule
  ],
  declarations: [DetailMarketPage]
})
export class DetailMarketPageModule {}
