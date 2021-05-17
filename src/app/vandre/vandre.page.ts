import { Component, OnInit } from '@angular/core';
import{Storage} from '@ionic/storage';
import{HttpClient} from '@angular/common/http';
import{MyserviceService} from '../myservice.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-vandre',
  templateUrl: './vandre.page.html',
  styleUrls: ['./vandre.page.scss'],
})
export class VandrePage implements OnInit {
private etat:string="";
private categorie:string="";
private detail:string="";
private description:string="";
private nom_produit:string="";
private prix:string="";
private contact:string="";
private ville:string="";
private cartier:string="";
private url="http://192.168.100.69/finder/super/ionic_api.php";
 private respons:any;
  constructor(
    private router:Router,
    private storage:Storage,
    private http:HttpClient, 
  ) { }

  ngOnInit() {
  }

 
  async send_data(){
    if(this.nom_produit.length>0 && this.prix.length>0){
     
     
    return new Promise((resolve) => {
      let body0 ={
        action3:'produit1',
        nom_produit:this.nom_produit,
        description:this.description,
        detail:this.detail,
        categorie:this.categorie,
        etat:this.etat,
        prix:this.prix,
        contact:this.contact,
        ville:this.ville,
        cartier:this.cartier,
        
      }
      this.http.post(this.url,body0).subscribe((res:any)=>{
        console.log("response="+res);
       this.respons= res.success;
       
      if(this.respons==true){ 
        
        this.respons= res.msg;
        console.log("super coul :"+ this.respons);
        let navigationExtras: NavigationExtras = {
          state: {
            data:"bonjour"
          }
        };
        this.router.navigate(['market'],navigationExtras);
       
      }else
      if(this.respons==false){
      
        this.respons= res.msg;
        console.log(" desolé :"+ this.respons);
        
      }
  
      },error=>{
        console.log("probleme suvenu:"+error);
      });
    
     
      });
    

      }else
      console.log("veillez remplire toute les cases!");
  
    

   }
}
