import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import{ImagePicker} from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import{ActionSheetController, AlertController} from '@ionic/angular';
import { AlertOptions } from '@ionic/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forme-service',
  templateUrl: './forme-service.page.html',
  styleUrls: ['./forme-service.page.scss'],
})
export class FormeServicePage implements OnInit {

  private nom_user:string="";
  private type_service:string="";
  private description:string="";
  private detail:string="";
  private prix_service:string ="";
  private frais_suple:string="";
  private dispo:string="";
  private contact:string="";
  private pays:string="";
  private ville:string="";
  private localisation:string="";
  private url="http://192.168.100.69/finder/super/ionic_api.php";
 private respons:any;
 croppedImagepath = "";
 options:any;
imgres:any;
  constructor(
    private router:Router,
   // private storage:Storage,
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
      buttons: [{
        text: 'Choisire une image dans votre librairie',
        handler: () => {
          //this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          this.imagePicker();
        }
      },
      {
        text: 'Utiliser la Caméra',
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
    
    
    if(this.nom_user.length>0 && this.prix_service.length>0){
     
    return new Promise((resolve) => {
      let body0 ={
        service:'service',
        nomUser_:this.nom_user,
        typeService_:this.type_service,
        description_:this.description,
        detail_:this.detail,
        prixService_:this.prix_service,
        fraisSuple_:this.frais_suple,
        dispo_:this.dispo,
        contact_:this.contact,
        pays_:this.pays,
        ville_:this.ville,
        localisation_:this.localisation
        
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
