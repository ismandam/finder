import { Component, OnInit } from '@angular/core';

import{Product} from '../models/interface_product';
import { Router, NavigationExtras} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{Storage} from '@ionic/storage';
import { NavController } from '@ionic/angular';
import{MyserviceService} from '../myservice.service';
import { element } from 'protractor';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
  public Electronik:string;
  allInfos : any=[];
  allInfos1 : any=[];
  data: Product[];
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

    this.data=[
     {
       id:'1',
       title:'radio',
     description:'ma description',
     detail:"",
     img:[
      'assets/img/prod1/img1.jpg',
      'assets/img/prod1/img2.png'
     ],
     price:5000,
     contact:"",
     category:'vetement',
     state:'neuf',
     city:'yde',
     cartier:"Essos",
     avStart:4,
     disponible:{
       dispo:true,
       type: 'Disponible en magasin',
      
     }
     }
  
    ,
     ////////im2////////////
       {
       id:'2',
       title:'television',
     description:'ma description',
     detail:"",
     img:[
      'assets/img/prod2/img1.jpg',
       'assets/img/prod2/img2.jpg'
     ],
     price:2000,
     contact:"",
     category:'vetement',
     state:'neuf',
     city:'yde',
     cartier:"Stinga",
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
     detail:"",
     img:[
      'assets/img/prod3/img1.jpg',
      'assets/img/prod3/img2.jpg',
       'assets/img/prod3/img3.png'
     ],
     price:10000,
     contact:"",
     category:'vetement',
     state:'neuf',
     city:'Yaoundé',
     cartier:"Emana",
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
     description:'Ordinateur portable core i5, 4GB de ram ',
      detail:"Ordinateur portable core i5, 4GB de ram ",
     img:[
      'assets/img/prod4/img1.png',
       'assets/img/prod4/img2.jpg',
       'assets/img/prod4/img3.jpg'
     ],
     price:22000,
     contact:"",
     category:'vetement',
     state:'neuf',
     city:'Douala',
     cartier:"Akwa",
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
     description:'Ordinateur portable',
      detail:"",
     img:[
      'assets/img/prod4/img1.png',
       'assets/img/prod4/img2.jpg',
       'assets/img/prod4/img3.jpg'
     ],
     price:22000,
     contact:"",
     category:'vetement',
     state:'neuf',
     city:'Bafoussam',
     cartier:"centre",
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
     description:'Ordinateur portable  ',
      detail:"",
     img:[
      'assets/img/prod4/img1.png',
       'assets/img/prod4/img2.jpg',
       'assets/img/prod4/img3.jpg'
     ],
     price:22000,
     contact:"",
     category:'vetement',
     state:'neuf',
     city:'Ebolowa',
     cartier:"centre",
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
     description:'Ordinateur portable',
      detail:"",
     img:[
      'assets/img/prod4/img1.png',
       'assets/img/prod4/img2.jpg',
       'assets/img/prod4/img3.jpg'
     ],
     price:22000,
     contact:"",
     category:'vetement',
     state:'neuf',
     city:'Kribi',
     cartier:"centre",
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
    //let j=0;
    if(this.fab_data!=null){

      console.log("bonjour::"+this.fab_data);
    
    this.service.getAllInfo().subscribe(infos =>{
        this.allInfos = infos['AllProduct'][this.fab_data];
        console.log("respons api",this.allInfos);
       
      //this.allInfos=Array.of(infos['product']);
     
    

     
      
     // this.post = [];
      //let  allInfos = JSON.parse(JSON.stringify(this.allInfos));
    
    
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
        this.allInfos = infos['AllProduct']['Electroniques'] as Array<Product>;
        console.log("respons api",this.allInfos);
        let j = this.allInfos.length;
        let i = 0
        while(i <= j) {
          console.log('Element '+this.allInfos[i]['nom_produit'])
            let tmp_data : Product = {
              id:'',
              title:'',
              description:'',
              detail:'',
              img:[],
              price:0,
              contact:'',
              category: '',
              state:'',
              city:'',
              cartier:'',
              avStart:0,
              disponible:null
            }

            tmp_data.id = this.allInfos[i]['Id']
            tmp_data.title = this.allInfos[i]["nom_produit"]
            tmp_data.description = this.allInfos[i]["description"]
            tmp_data.detail = this.allInfos[i]["detail"]
            tmp_data.img = [
              this.allInfos[i]['url_imgP'],
              this.allInfos[i]['url_img1'],
              this.allInfos[i]['url_img2']
                ]
            tmp_data.price = this.allInfos[i]["prix"]
            tmp_data.contact = this.allInfos[i]["contact"]
            tmp_data.category = this.allInfos[i]["categorie"]
            tmp_data.state = this.allInfos[i]["etat_produit"]
            tmp_data.city = this.allInfos[i]["ville"]
            tmp_data.cartier = this.allInfos[i]["cartier"]
            tmp_data.avStart = 10
            tmp_data.disponible = {
              dispo:true,
              type: 'Disponible en magasin',
            
            }
  
            this.data.push(tmp_data)
       
          i++
        }
       
      /*if(event){
        setTimeout(()=>{event.target.complete();},200);
     
       }*/
            
    }, error=>{
      console.log(error);
      if(event){
        setTimeout(()=>{event.target.complete();},200);
      }
    });
     
    console.log("Data Content  "+this.data.toString);
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
