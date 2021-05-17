import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{MyserviceService} from '../myservice.service';
import { Router,  NavigationExtras } from '@angular/router';
import{Storage} from '@ionic/storage';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.page.html',
  styleUrls: ['./form-register.page.scss'],
})
export class FormRegisterPage implements OnInit {
private first_name: string="";
private last_name:string="";
private contact_number:string="";
private addresse:string="";
private email:string="";
private pasword:string="";
private url="http://192.168.100.69/finder/super/ionic_api.php";
 private respons:any;

  constructor(
    private service:MyserviceService, 
    private http:HttpClient, 
    private router:Router,
    private storage:Storage
    ) { }

  ngOnInit() {

  }

 async register(){
  return new Promise((resolve) => {
  let body ={
    action0:'ionic_register',
    firstname:this.first_name,
    lastname:this.last_name,
    contact_number:this.contact_number,
    address:this.addresse,
    email:this.email,
    password:this.pasword,
  }
  this.http.post(this.url,body).subscribe((res:any)=>{
    console.log(res);
   this.respons= res.success;
   
  if(this.respons==true){ 
    let body1 ={
      action:'ionic_login',
              email: this.email,
              password:this.pasword,
    }
    this.storage.create();
    this.storage.set('body1',body1);
    this.respons= res.msg;
    console.log(" retour de mon api :"+ this.respons);
    let navigationExtras: NavigationExtras = {
      state: {
        data: body.firstname
      }
    };
    this.router.navigate(['form-login'],navigationExtras);
  }else
  if(this.respons==false){
    this.storage.create();
    this.storage.clear();
    this.respons= res.msg;
    console.log(" retour de mon api00 :"+ this.respons);
    
  }else
  console.log(" retour bizard :");
  },error=>{
    console.log("probleme suvenu:"+error);
  });

 
  });
}
}
