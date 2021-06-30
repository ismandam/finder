import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { CartPage } from '../cart/cart.page';

import{Storage} from '@ionic/storage';
import { itemCart } from '../models/iinterface_itemCart';
//import { Product } from '../models/interface_product';
import {interfaceItem}from'../models/interfaceClass';

@Component({
  selector: 'app-detail-market',
  templateUrl: './detail-market.page.html',
  styleUrls: ['./detail-market.page.scss'],
})
export class DetailMarketPage implements OnInit {
  productDetail:any;
  constructor(public router:Router, 
    private route:ActivatedRoute,
    public modalcontol: ModalController,
    public storage:Storage
     ) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.productDetail = this.router.getCurrentNavigation().extras.state.data;
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
 
     AddTocart(productDetail_:interfaceItem){
       let added:boolean=false;
       this.storage.create();
      this.storage.get("Cart").then((data:itemCart[])=>{
          console.log("frais de livraison= "+productDetail_.disponible.feed);
        //test si il n'y a pas d'article dans la bd///
        if(data==null||data.length==0){
          data=[];
         data.push({
           item:productDetail_,
           quantite:1,
           prix : productDetail_.price
         })

          }else 
          {

       
            for(let i=0;i<data.length;i++){
            ///test si le panier contient l'article////////
              const element:itemCart=data[i];
              if(productDetail_.id==element.item.id){
                element.quantite += 1 ;
                element.prix += productDetail_.price;
                added=true;
              }
            } 
            if(!added){
              data.push({
                item:productDetail_,
                quantite:1,
                prix:productDetail_.price
              })
           }
          }
       
         
          this.storage.create();
          this.storage.set("Cart",data);
        
        });

     }
}
