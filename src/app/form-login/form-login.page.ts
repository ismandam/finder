import { Component, OnInit } from '@angular/core';
import{Storage} from '@ionic/storage';
import { Router,  NavigationExtras } from '@angular/router';
import{HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.page.html',
  styleUrls: ['./form-login.page.scss'],
})
export class FormLoginPage implements OnInit {
private user_email:string="";
private user_pass: string="";
data1:any="";
data2:any="";
private url="http://192.168.100.62/finder/super/ionic_api.php";
private response:any;
  constructor(
    private storage:Storage,
     private router:Router,
      private http: HttpClient) { }

  ngOnInit() {
  }

 async login(){

   this.storage.create();
   this.storage.get("body").then(val=>{
     console.log("val content"+ val);
      if(val==null){
            console.log("rien dans la bd");
            console.log("user="+this.user_email);
            console.log("pass="+this.user_pass);
            let body1={
              action2:'ionic_login',
              email: this.user_email,
              password:this.user_pass,
             }
             this.http.post(this.url,body1).subscribe((res:any)=>{
              console.log("response="+res);
              this.response= res.success;
              console.log("response api"+this.response);
              if(this.response==true){
                this.storage.create();
                this.storage.set('body1',body1);
                this.response= res.msg;
                console.log(" retour de mon api00 :"+ this.response);
                let navigationExtras: NavigationExtras = {
                  state: {
                    data:"bonjour"
                  }
                };
                this.router.navigate(['market'],navigationExtras);
            
              }else
              if(this.response==false){
                this.response= res.msg;
                console.log(" erreur connection:"+ this.response);
              }else
              console.log(" retour bizard :");
            
             },error=>{
              console.log("probleme suvenu:"+error);
                });
      }else{
          this.data1=val.email;
          this.data2=val.password;
          console.log("ma valeur"+this.data1);
          let navigationExtras: NavigationExtras = {
            state: {
              data:"bonjour"
            }
          };
          this.router.navigate(['market'],navigationExtras);
      }
   }).catch(error=>"erreur enregistrement"+error);

    if(this.user_email==this.data1 && this.user_pass==this.data2){
     return new Promise((resolve)=>{
    
    let body={
     action2:'ionic_login',
     email: this.user_email,
     password:this.user_pass,
    }
    this.http.post(this.url,body).subscribe((res:any)=>{
   
     this.response= res.success;
     console.log("response api"+this.response);
     if(this.response==true){
   
      // this.storage.create();
      // this.storage.set('login',login);
       this.response= res.msg;
       console.log(" retour de mon api00 :"+ this.response);
       let navigationExtras: NavigationExtras = {
         state: {
           data:"bonjour"
         }
       };
       this.router.navigate(['market'],navigationExtras);
   
     }else
     if(this.response==false){
       this.response= res.msg;
       console.log(" erreur connection:"+ this.response);
     }else
     console.log(" retour bizard :");
   
    },error=>{
     console.log("probleme suvenu:"+error);
       });
   
   
       })
      

   }
  else if(this.user_email==null && this.user_pass==null){
  console.log("aucun utilisateur enregistrer");
  }
   

  }

}
