import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { CartPage } from '../cart/cart.page';
import { FolderPage } from '../home/folder.page';

@Component({
  selector: 'app-detail-market',
  templateUrl: './detail-market.page.html',
  styleUrls: ['./detail-market.page.scss'],
})
export class DetailMarketPage implements OnInit {
  data:any;
  constructor(public router:Router, 
    private route:ActivatedRoute,
    public modalcontol: ModalController ) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
      }
    });
   }

  ngOnInit() {
  }
  slideOptions={
    initialSlide:0,
    slidesPerview:1,
    autoplay:true,
    loop:true
     };
     option =[
     
     ]
    async openCart(){
      const modal= await this.modalcontol.create({
      component:CartPage,
      animated:true
      
      });
        return await modal.present();

     }
}
