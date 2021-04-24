import { Component, OnInit } from '@angular/core';
import { Router,  NavigationExtras } from '@angular/router';
import{Storage} from '@ionic/storage';


export class Log_outPage implements OnInit {

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