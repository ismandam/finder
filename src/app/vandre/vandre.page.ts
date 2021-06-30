import { Component, OnInit } from '@angular/core';
import{Storage} from '@ionic/storage';
import{HttpClient} from '@angular/common/http';
import{MyserviceService} from '../myservice.service';
import { NavigationExtras, Router } from '@angular/router';
import{ImagePicker} from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import{ActionSheetController, AlertController} from '@ionic/angular';
import { AlertOptions } from '@ionic/core';

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
private prix:any="";
private frais:any="";
private dispo:string="";
private contact:string="";
private ville:string="";
private cartier:string="";
private url="http://192.168.100.69/finder/super/ionic_api.php";
 private respons:any;
 croppedImagepath = "";
 options:any;
imgres:any;

  constructor(
    private router:Router,
    private storage:Storage,
    private http:HttpClient, 
    public image:ImagePicker,
    public actionSheetController: ActionSheetController,
    private alert:AlertController,
    private camera: Camera
  ) { }

  ngOnInit() {
  }

  
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "salut, sélectionner deux images",
      cssClass: 'actionsheet',
      buttons: [{
        text: 'Load from Library',
        cssClass:'text_',
        handler: () => {
          //this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          this.imagePicker();
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ],
      backdropDismiss: true
    });
    await actionSheet.present();
  }

  imagePicker(){

    this.options= {
      maximumImagesCount:3,
      width:200,  
      quality:30,
      outputType:1
    };
    this.imgres=[];
    this.image.getPictures(this.options).then((results)=>{
      for (var i=0; i< results.length; i++){
    this.imgres.push('data:image/jpeg;base64,'+ results[i]);
      }
    },(error)=>{
    console.log(error);
    });
    console.log("click pour image");
    }

    
  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.croppedImagepath = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  
    
  async send_data(){
   
    console.log("alertn **************!");
    
    
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
        frais:this.frais,
        dispo:this.dispo,
        contact:this.contact,
        ville:this.ville,
        cartier:this.cartier,
        
      }
      this.http.post(this.url,body0).subscribe(async (res:any)=>{
        console.log("response="+res);
       this.respons= res.success;
       
      if(this.respons==true){ 
        
        this.respons= res.msg;
        let Alert_option: AlertOptions ={
          header: "Finder ",
          subHeader: " finder the best",
          message: this.respons,
          backdropDismiss:true,
          translucent: true,
          animated:true,
          keyboardClose:true
          
        };
        (await this.alert.create(Alert_option)).present();
        
        //console.log("super coul :"+ this.respons);
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

      {
        let Alert_option: AlertOptions ={
          header: "Finder ",
          subHeader: " finder the best",
          message: "veillez remplire toute les cases!",
          backdropDismiss:true,
          translucent: true,
          animated:true,
          keyboardClose:true
          
        };
        (await this.alert.create(Alert_option)).present();

      }
    
  
    

   }

}
