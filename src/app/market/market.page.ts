import { Component, OnInit } from '@angular/core';
import{MyserviceService} from '../myservice.service';
import{Product} from '../models/interface_product';
import { Router, NavigationExtras} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{Storage} from '@ionic/storage';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {

  data: Product[];
  data1:any="";
  data2:any="";
  searchTerm:string;
  public toggled:boolean=false;
  public fab_data:string="";
  constructor(
   private navCtrl:NavController,
    private activatedRoute: ActivatedRoute,
    public router:Router,
    private storage:Storage
    ) {
    this.data=[
     {
       id:'1',
       title:'radio',
     description:'ma description',
     img:[
      'assets/img/prod1/img1.jpg',
      'assets/img/prod1/img2.png'
     ],
     price:5000,
     category:'vetement',
     state:'neuf',
     city:'yde',
     avStart:4,
     disponible:{
       dispo:true,
       type: 'Disponible en magasin',
      
     }
     },
////////im2////////////
     {
       id:'2',
       title:'television',
     description:'ma description',
     img:[
      'assets/img/prod2/img1.jpg',
       'assets/img/prod2/img2.jpg'
     ],
     price:2000,
     category:'vetement',
     state:'neuf',
     city:'yde',
     avStart:3,
     disponible:{
      dispo:true,
      type: 'livraison',
      frais:1000,
    }
     },
///////////////img3///////////////
     {
      id:'3',
      title:'camera',
     description:'ma description',
     img:[
      'assets/img/prod3/img1.jpg',
      'assets/img/prod3/img2.jpg',
       'assets/img/prod3/img3.png'
     ],
     price:10000,
     category:'vetement',
     state:'neuf',
     city:'Yaoundé',
     avStart:1,
     disponible:{
      dispo:true,
      type: 'livraison',
      frais:1000,
    }
     },
//////////////img4///////////////////
     {
      id:'4',
      title:'laptop',
     description:'Ordinateur portable core i5, 4GB de ram '
      ,
     img:[
      'assets/img/prod4/img1.png',
       'assets/img/prod4/img2.jpg',
       'assets/img/prod4/img3.jpg'
     ],
     price:22000,
     category:'vetement',
     state:'neuf',
     city:'Douala',
     avStart:2,

     disponible:{
      dispo:true,
      type: 'Disponible en magasin',
     
    }
     },
     //////////////img5///////////////////
     {
      id:'5',
      title:'laptop prime',
     description:'Ordinateur portable'
      ,
     img:[
      'assets/img/prod4/img1.png',
       'assets/img/prod4/img2.jpg',
       'assets/img/prod4/img3.jpg'
     ],
     price:22000,
     category:'vetement',
     state:'neuf',
     city:'Bafoussam',
     avStart:2,
     disponible:{
      dispo:true,
      type: 'livraison',
      frais:1000,
    }
     },
     //////////////img6///////////////////
     {
      id:'6',
      title:'costa',
     description:'Ordinateur portable  '
      ,
     img:[
      'assets/img/prod4/img1.png',
       'assets/img/prod4/img2.jpg',
       'assets/img/prod4/img3.jpg'
     ],
     price:22000,
     category:'vetement',
     state:'neuf',
     city:'Ebolowa',
     avStart:2,
     disponible:{
      dispo:true,
      type: 'livraison',
      frais:1000,
    }
     },
     //////////////img7///////////////////
     {
      id:'7',
      title:'desktop',
     description:'Ordinateur portable'
      ,
     img:[
      'assets/img/prod4/img1.png',
       'assets/img/prod4/img2.jpg',
       'assets/img/prod4/img3.jpg'
     ],
     price:22000,
     category:'vetement',
     state:'neuf',
     city:'Kribi',
     avStart:2,
     disponible:{
      dispo:true,
      type: 'livraison',
      frais:1000,
    }
     }
    ]
   
 this.toggled = false;
  }

  public toggle():void{
  
    this.toggled=!this.toggled
   }

 toggleSearch(){
   this.toggled=this.toggled ? false:true;
 }
  
  ngOnInit() {
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
       fab(Autre1:string){
         
        if(Autre1.length>0){
          this.fab_data=Autre1;
          console.log("bonjour::"+this.fab_data);
        }
       
       }

      
}
