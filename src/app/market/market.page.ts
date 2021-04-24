import { Component, OnInit } from '@angular/core';
import{MyserviceService} from '../myservice.service';
import{Product} from '../models/interface_product';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{Storage} from '@ionic/storage';
@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {

  data: Product[];
  data1:any="bonjour";
  searchTerm:string;
  public toggled:boolean=false;
  constructor(
    private activatedRoute: ActivatedRoute,
    public router:Router,
    private storage:Storage
    ) {
    this.data=[
     {title:'radio',
     description:'ma description',
     img:[
      'assets/img/prod1/img1.jpg',
      'assets/img/prod1/img2.png'
     ],
     price:5000,
     category:'vetement',
     state:'neuf',
     city:'yde',
     avStart:4
     },
////////im2////////////
     {title:'television',
     description:'ma description',
     img:[
      'assets/img/prod2/img1.jpg',
       'assets/img/prod2/img2.jpg'
     ],
     price:2000,
     category:'vetement',
     state:'neuf',
     city:'yde',
     avStart:3
     },
///////////////img3///////////////
     {title:'camera',
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
     avStart:1
     },
//////////////img4///////////////////
     {title:'laptop',
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
     avStart:2
     },
     //////////////img5///////////////////
     {title:'laptop prime',
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
     avStart:2
     },
     //////////////img6///////////////////
     {title:'costa',
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
     avStart:2
     },
     //////////////img7///////////////////
     {title:'desktop',
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
     avStart:2
     }
    ]
    this.storage.create();
    this.storage.get("body").then(val=>{

   this.data1=val.firstname;
   console.log("ma valeur"+this.data1);
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
       fab(){

        console.log("bonjour");
       }

       log_out(){
       this.storage.create();
       this.storage.clear();
       this.router.navigate(['form-login']);

       }
}
