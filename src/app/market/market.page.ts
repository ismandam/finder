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
  allInfos : any=[];
  allInfos1 : any=[];
  data_tmp: any[];
  tmp_data : interfaceItem[]=[];
  img:any=[];
   dataclass :any;
  data1:any="";
  data2:any="";
  searchTerm:string;
  public toggled:boolean=false;
  public fab_data:string;
  post: any[];
 
  constructor(
   private navCtrl:NavController,
    private activatedRoute: ActivatedRoute,
    public router:Router,
    private storage:Storage,
    public service:MyserviceService 
    ) {
   
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


  getInfos(event:any){
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
             150,
             "disponible en magasin"
            
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
        setTimeout(()=>{event.target.complete();},200);
     
       }
            
    }, error=>{
      console.log(error);
      if(event){
        setTimeout(()=>{event.target.complete();},200);
      }
    });
    }else if(this.fab_data==null)
     {

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
             200,
             "disponible en magasin"
            
             );

             this.tmp_data.push(element);
 
        });

        console.log('data '+this.tmp_data);
        let i = 0;
        while(i < this.tmp_data.length){
          console.log(this.tmp_data[i])
          //traitement des donnees
          i++;
        }


      
      if(event){
        setTimeout(()=>{event.target.complete();},200);
     
       }
            
    }, error=>{
      console.log(error);
      if(event){
        setTimeout(()=>{event.target.complete();},200);
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
      this.router.navigate(["form-login"]);
    }else
    {
      this.data1=val.email;
      this.data2=val.password;
      console.log("bienvenu"+this.data1);
      this.router.navigate(["vandre"]);
    }

    }).catch(error=>"erreur de donnees"+error);

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
