import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
 // selector: 'modal-page',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(public modalctrl:ModalController) { }

  ngOnInit() {
  }
 closeModal(){
this.modalctrl.dismiss({
'dismissed':true
});

 }

}
