import { Component } from '@angular/core';

import { Router,  NavigationExtras } from '@angular/router';
import{Storage} from '@ionic/storage';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private badge:any;
  public appPages = [
    { title: 'CNI et documents perdu', url: '/folder/Home', icon: 'document1' },
    
    { title: 'Espace iMarket', url: '/market', icon: 'cart1' },
   
  ];
  public userPage=[
    { title: 'conectez vous', url: '/form-login', icon: 'people' },
    { title: 'enregitrez vous', url: '/form-register', icon: 'document' },
    { title: 'deconectez vous', url: '', icon: 'document' },
   // /log_out
  ];
  public labels = ['inscription', 'login', 'message'];
  constructor(  public router: Router,
    private storage:Storage,
    private navCtrl:NavController
    ) {

      this.storage.create();
      this.storage.get("badge").then(val=>{
       
       if(val!=null){
        console.log("super coooool");
         this.badge=val;
         
       }else
       {
        console.log("aucun produit chargé");
         
         
       }
   
       }).catch(error=>"erreur de donnees"+error);
   
    

  }

 
   
   


  
  logout(){
    this.storage.create();
    this.storage.clear();
   // this.router.navigate(["form-login"]);
    this.navCtrl.navigateRoot('/form-login', { animated: true, animationDirection: 'forward' });

    }

}
