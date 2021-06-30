import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,  NavigationExtras } from '@angular/router';
import{MyserviceService} from '../myservice.service';
import {interfaceItem}from'../models/interfaceClass';
import { InterfaceObjet } from '../models/interfaceClass_objet';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
 
  allInfos : any=[];
  tmp_data : InterfaceObjet[]=[];
   searchTerm:string;
  public items: any = [];
  public folder: string;
  public toggled:boolean=false;
  public fab_data:string;
 
  constructor(
    private activatedRoute: ActivatedRoute,
    public router:Router,
     public service:MyserviceService 
     ) { 
    this.toggled = false;
    
   
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getInfos(this.allInfos);
  }

  fab(Autre1:string){
         
    if(Autre1.length>0){
      this.fab_data=Autre1;
      console.log("bonjour::"+this.fab_data);
      this.getInfos(this.allInfos);
    }
   
   }

  public toggle():void{

     this.toggled=!this.toggled
  }

  toggleSearch(){
    this.toggled=this.toggled ? false:true;
  }

  public  homelistener(data:any) :void {
    let navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };
    this.router.navigate(['detail-cni'],navigationExtras);
   
    }

    getInfos(event:any){
      if(this.fab_data!=null){
        this.tmp_data.length=0;
        this.service.getAllInfo().subscribe(info =>{
        this.allInfos = info['cni'][this.fab_data]; 
          this.allInfos.forEach(product0 => {
            let img_ : string[] = [product0.urlimage,product0.urlimage2];
          
            let element0 = new InterfaceObjet(
              product0.id,
              product0.nom_prenom,
              product0.num_cni,
              product0.date_cni,
               img_,
               product0.contact,
               product0.post_by,
               product0.categorie,
               );  
             this.tmp_data.push(element0);
          });
          let j = 0;
          while(j < this.tmp_data.length){
          console.log("tmp data=="+ this.tmp_data[j]);
          //traitement des donnees
          j++;
          } 
          if(event){
            setTimeout(()=>{event.target;},200);
         
           }
          
          console.log(" toutes les infos de ton API :"+this.allInfos)
        }, error=>{
          console.log(error);
          if(event){
            setTimeout(()=>{event.target.complete();},200);
          }
        });

        
      
      }else
      if(this.fab_data==null){
        this.tmp_data.length=0;

        this.service.getAllInfo().subscribe(info =>{
          this.allInfos = info['all_objet'];
          this.allInfos.forEach(product => {
            let img_ : string[] = [product.urlimage,product.urlimage2];
          
            let element0 = new InterfaceObjet(
              product.id,
              product.nom_prenom,
              product.num_cni,
              product.date_cni,
               img_,
               product.contact,
               product.post_by,
               product.categorie,
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
            setTimeout(()=>{event.target;},200);
         
           }
          
          console.log(" toutes les infos de ton API :"+this.allInfos)
        }, error=>{
          console.log(error);
          if(event){
            setTimeout(()=>{event.target.complete();},200);
          }
        });

      }
     
    }

    addcni(){
      this.router.navigate(['add-cni']);

    }
}
