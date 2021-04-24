import { Component, OnInit } from '@angular/core';
import { Router,  NavigationExtras } from '@angular/router';
import{Storage} from '@ionic/storage';
@Component({
  selector: 'app-log-out',
 // templateUrl: './log-out.page.html',
 // styleUrls: ['./log-out.page.scss'],
})
export class LogOutPage implements OnInit {

  constructor(
    private storage:Storage,
    private router:Router,
    ) { 
      this.storage.create();
      this.storage.clear();
      this.router.navigate(['form-login']);
  }

  ngOnInit() {
   
  }
  
}
