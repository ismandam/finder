import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,  NavigationExtras } from '@angular/router';
import{MyserviceService} from '../myservice.service';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
 
  allInfos : any=[];
   searchTerm:string;
  public items: any = [];
  public folder: string;
  public toggled:boolean=false;
 
  constructor(private activatedRoute: ActivatedRoute,public router:Router, public service:MyserviceService ) { 
    this.toggled = false;
    
   
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getInfos(this.allInfos);
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
  
      this.service.getAllInfo().subscribe(infos =>{
        this.allInfos = infos['cni'];
        //this.allInfos=Array.of(infos['product']);
        
        this.allInfos = JSON.parse(JSON.stringify(this.allInfos));
        if(event){
          setTimeout(()=>{event.target.complete();},200);
       
         }
         console.log("affiche l'ID== :"+infos)
        console.log(" toutes les infos de ton API :"+this.allInfos)
      }, error=>{
        console.log(error);
        if(event){
          setTimeout(()=>{event.target.complete();},200);
        }
      });
    }

    addcni(){
      this.router.navigate(['add-cni']);

    }
}
