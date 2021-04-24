import { Component } from '@angular/core';

import { Router,  NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'CNI et Passeport perdu', url: '/folder/Home', icon: 'document1' },
    { title: 'Diplomes et Actes perdu', url: '/diplome', icon: 'document' },
    { title: 'Permis de conduir perdu', url: '/permis', icon: 'document' },
    { title: 'Espace iMarket', url: '/market', icon: 'cart1' },
   
  ];
  public userPage=[
    { title: 'conectez vous', url: '/form-login', icon: 'people' },
    { title: 'enregitrez vous', url: '/form-register', icon: 'document' },
    { title: 'deconectez vous', url: '/log_out', icon: 'document' },

  ];
  public labels = ['inscription', 'login', 'message'];
  constructor(  public router: Router) {

/*
    this.storage.get('storage_sesson').then((res)=>{
      if(res==null){
           this.router.navigate(['form-login']);
        }else {

          this.router.navigate(['folder']);
        }
        
});
*/
  }

  
  

}
