import { Component, OnInit } from '@angular/core';
import{Storage} from '@ionic/storage';
import{HttpClient} from '@angular/common/http';
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
private url="http://192.168.100.62/finder/super/ionic_api.php";
 private respons:any;
  constructor(
    private storage:Storage,
    private http:HttpClient, 
  ) { }

  ngOnInit() {
  }

 
  async send_data(){
    return new Promise((resolve) => {
      let body0 ={
        action:'produit1',
        nom_produit:this.nom_produit,
        description:this.description,
        detail:this.detail,
        categorie:this.categorie,
        etat:this.etat,
        
      }
      this.http.post(this.url,body0).subscribe((res:any)=>{
        console.log("response="+res);
       this.respons= res.success;
       
      if(this.respons==true){ 
         /*  let body1 ={
        
            }
            this.storage.create();
            this.storage.set('body1',body1);
         */
        this.respons= res.msg;
        console.log("super coul :"+ this.respons);
       
      }else
      if(this.respons==false){
       // this.storage.create();
       // this.storage.clear();
        this.respons= res.msg;
        console.log(" desolé :"+ this.respons);
        
      }else
      console.log(" retour bizard :");
      },error=>{
        console.log("probleme suvenu:"+error);
      });
    
     
      });
  
   }
}
