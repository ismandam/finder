import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { CartFormPage } from '../cart-form/cart-form.page';
import { itemCart } from '../models/iinterface_itemCart';
//import { Product } from '../models/interface_product';


@Component({
  selector: 'app-cart',
 // selector: 'modal-page',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
 public cartData:itemCart[];
public total:number= 0;

  constructor(
    public modalctrl:ModalController,
    public storage :Storage,

    
    ) { }

  ngOnInit() {
   this.storage.create();
   this.storage.get('Cart').
   then((data:itemCart[])=>{
   this.cartData=data;
   this.cartData.forEach((element:itemCart)=>{
     if(element.item.disponible[2] ==="Disponible en magasin"){
      element.item.disponible[1]=0;
     
     }
     this.total += (element.quantite*element.item.price + element.item.disponible[1]);
    
   })

   }).catch(err=>{
     console.log(err);

   })
  }

  


  closeModal(){
    // this.storage.clear();
  this.modalctrl.dismiss({
  'dismissed':true

  });

  }

  delet_article(article_id:itemCart,index:number):void{
  //this.storage.create();
  this.cartData.splice(index,1);
  this.storage.set("Cart",this.cartData).then((data)=>{

    console.log("mon id est==",data);
  })

  }

 async mail(){
    const modal= await this.modalctrl.create({
      component:CartFormPage,
      animated:true
      
      });
        return await modal.present();

  }
  


}
