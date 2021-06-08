import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.page.html',
  styleUrls: ['./cart-form.page.scss'],
})
export class CartFormPage implements OnInit {
private Mail:string="";
  constructor(
    public modalctrl:ModalController
  ) { }

  ngOnInit() {
  }

  closeModal(){
    // this.storage.clear();
  this.modalctrl.dismiss({
  'dismissed':true

  });

  }
  submitForm(){
console.log("votre mail");

  }

}
