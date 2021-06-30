import { Component, OnInit } from '@angular/core';

//import{Product} from '../models/interface_product';
import { Router, NavigationExtras} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{Storage} from '@ionic/storage';
import { NavController } from '@ionic/angular';
import{MyserviceService} from '../myservice.service';
import {interfaceItem}from'../models/interfaceClass';


@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
  public Electronik:string;
  extra:any;
  stor:any;
  stor2:any;
  badge:any=[];
  allInfos : any=[];
  allInfos1 : any=[];
  data_tmp: any[];
  tmp_data : interfaceItem[]=[];
  img:any=[];
  // dataclass :any;
  data1:any="";
  data2:any="";
  searchTerm:string;
  public toggled:boolean=false;
  public fab_data:string;
 // post: any[];
 private feed:number;
  constructor(
   private navCtrl:NavController,
    private activatedRoute: ActivatedRoute,
    public router:Router,
    private storage:Storage,
    public service:MyserviceService 
    ) {
     
    

      this.storage.create();
      this.storage.get('badge').then(data=>{
        this.stor=this.stor2+data;
      console.log("storage data=",this.stor);
      });
        
     
 this.toggled = false;
  }

  public toggle():void{
  
    this.toggled=!this.toggled
   }

 toggleSearch(){
   this.toggled=this.toggled ? false:true;
 }
  
  ngOnInit() {
   
    
   this.getInfos(this.allInfos);
  }
 
  fab(Autre1:string){
         
    if(Autre1.length>0){
      this.fab_data=Autre1;
      console.log("bonjour::"+this.fab_data);
      this.getInfos(this.allInfos);
    }
   
   }


 async getInfos(event:any){
    if(this.fab_data!=null){
      this.tmp_data.length=0;
      console.log("bonjour::"+this.fab_data);
    
    this.service.getAllInfo().subscribe(infos =>{
        this.allInfos1 = infos['AllProduct'][this.fab_data];
      
        this.allInfos1.forEach(product0 => {
          let img_ : string[] = [product0.url_imgP,product0.url_img1,product0.url_img2];
        
          let element0 = new interfaceItem(
            product0.Id,
            product0.nom_produit,
            product0.description,
            product0.detail,
             img_,
             product0.prix,
             product0.contact,
             product0.categorie,
             product0.etat_produit,
             product0.ville,
             product0.cartier,
             2,
             true,
             product0.frais_livraison,
             
             product0.disponibilite,
            
             );
            


           this.tmp_data.push(element0);
          
          
         
 
        });
      
        let j = 0;
        while(j < this.tmp_data.length){
          console.log("tmp data=="+ this.tmp_data[j])
          //traitement des donnees
          j++;
        }   
      if(event){
        //setTimeout(()=>{event.target.complete();},200);
        event.target.complete();
       }
            
    }, error=>{
      console.log(error);
      if(event){
        setTimeout(()=>{event.target.complet();},200);
      }
    });
    }else if(this.fab_data==null)
     {
      this.tmp_data.length=0;
      this.service.getAllInfo().subscribe(infos =>{
        this.allInfos = infos['product'];
        
        this.allInfos.forEach(product => {
          let img_ : string[] = [product.url_imgP,product.url_img1,product.url_img2];
         // let  disponible:any[]=[]
         
          let element = new interfaceItem(
            product.Id,
            product.nom_produit,
            product.description,
             product.detail,
             img_,
             product.prix,
             product.contact,
             product.categorie,
             product.etat_produit,
             product.ville,
             product.cartier,
             2,
             true,
             product.frais_livraison,
             
             product.disponibilite,
            
             );

             this.tmp_data.push(element);

             let i = 0;
             // this.stor2=this.tmp_data.length;
              while(i < this.tmp_data.length){
               // console.log(this.tmp_data[i])
                //traitement des donnees
                this.badge=[i];
                this.storage.create();
               this.storage.set('badge',this.badge);
                i++;
              }
 
        });

        this.storage.create();
        this.storage.get('badge').then(data=>{
          this.stor=(this.tmp_data.length+data[0])-data[0];
        console.log("storage data=",this.stor);
        });
        console.log('data length '+this.tmp_data.length);  
      
      if(event){
        //setTimeout(()=>{event.target.complete();},200);
        event.target.complete();
       }
            
    },error=>{
      console.log(error);
      if(event){
        //setTimeout(()=>{event.target;},200);
        event.target.complete();
      }
    });
     
    
    }
    

    
  }

  vendre(){
   this.storage.create();
   this.storage.get("body1").then(val=>{
    console.log("val content"+ val);
    if(val==null){
      console.log("connectez vous pour vendre un produit");
      let navigationExtras :NavigationExtras={
        state: {
          extra: "form-login"
        }
      
      }
      this.router.navigate(["form-login"],navigationExtras);
    }else
    {
      this.data1=val.email;
      this.data2=val.password;
      console.log("bienvenu"+this.data1);
      this.router.navigate(["vandre"]);
    }

    }).catch(error=>"erreur de donnees"+error);

  }
  service_form(){
    this.storage.create();
    this.storage.get("body1").then(val=> {
      if(val==null){
        console.log("connectez vous pour vendre un produit");
        let navigationExtras :NavigationExtras={
          state: {
            extra: "forme-service"
          }
        
        }
        this.router.navigate(["form-login"],navigationExtras);
      }else
      {
        this.data1=val.email;
        this.data2=val.password;
        console.log("bienvenu"+this.data1);
       
        this.router.navigate(["forme-service"]);
      }

    }).catch(error=>"erreur"+error);

  }
  registerpage(){

    this.router.navigate(['form-register']);
  }

  public  marketlistener(data:any) :void {
    let navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };
    this.router.navigate(['detail-market'],navigationExtras);
   
    }
    slideOptions={
      initialSlide:0,
      slidesPerview:1,
      autoplay:true,
      loop:true
       };
      

      
}
