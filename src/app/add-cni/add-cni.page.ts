
import { Component, OnInit } from '@angular/core';
import{ImagePicker} from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import{Storage} from '@ionic/storage';
import{ActionSheetController, AlertController} from '@ionic/angular';
import{HttpClient} from '@angular/common/http';
import { AlertOptions } from '@ionic/core';

@Component({
  selector: 'app-add-cni',
  templateUrl: './add-cni.page.html',
  styleUrls: ['./add-cni.page.scss'],
})
export class AddCniPage implements OnInit {
  nom_cni:string="";
  prenom:string="";
  Numero_cni:string="";
  date_cni:string="";

  votre_nom:string="";
  telephone:string="";
  email:string="";
  options:any;
  imgres:any;
  camera_img = "";
  cam_img:any[]=[];
  isLoading = false;
 fichier:string="";
 private url="http://192.168.100.69/finder/super/ionic_api.php";
 private api_res:any;
imagePickerOptions = {
  maximumImagesCount: 1,
  quality: 50
};
  constructor(
    public image:ImagePicker,
    public actionSheetController: ActionSheetController,
    private alert:AlertController,
    private camera: Camera,
    private storage:Storage,
    private http:HttpClient
    ) { }
   
    ngOnInit() {
    }


  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "salut, sélectionner deux images",
      buttons: [{
        text: 'Load from Library',
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
      this.camera_img = 'data:image/jpeg;base64,' + imageData;
      this.fichier="salut le monde";
      for(let i=0;i<=this.cam_img.length;i++){
        this.cam_img[i]=this.fichier;
      }
      this.storage.create();
      this.storage.set("camera",this.cam_img).then((data)=>{

      console.log("dat img"+data);
      });

    }, (err) => {
      // Handle error
    });
  }
   
  imagePicker(){
    this.options= {
      maximumImagesCount:2,
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

  }


  fichier0(){
   // let i=0;
  //  while( i<= this.fichier.length){

      console.log("url image=="+ this.date_cni);
    //  i++;
   // }
  

  }
 async sendData(){
  if(this.imgres.length>0 && this.nom_cni.length>0 && this.telephone.length>0){ 
    return new Promise((resolve)=>{
      let data ={
        cni_register:'cni_reg',
      nom_prenom:this.nom_cni,
      prenom:this.prenom,
      numero_cni:this.Numero_cni,
      date: this.date_cni,
      post_by:this.votre_nom,
      contac :this.telephone,
      email:this.email,
      img1:this.imgres[0],
      img2:this.imgres[1]
      }
      this.http.post(this.url,data).subscribe(async(respons:any)=>{
            this.api_res=respons.succes;
            if(this.api_res==true){
              this.api_res=respons.msg;
              let Alert_option: AlertOptions ={
                header: "FINDER",
                subHeader: " finder the best",
                message: this.api_res,
                backdropDismiss:true,
                translucent: true,
                animated:true,
                keyboardClose:true
                
              };
              (await this.alert.create(Alert_option)).present();
              

            }else
            if(this.api_res==false){
              this.api_res=respons.msg;
              let Alert_option: AlertOptions ={
                header: "FINDER",
                subHeader: " finder the best",
                message: this.api_res,
                backdropDismiss:true,
                translucent: true,
                animated:true,
                keyboardClose:true
                
              };
              (await this.alert.create(Alert_option)).present();

            }
        },error=>{
          console.log("probleme suvenu:"+error);
        });

    });
  } else
  if(this.imgres.length>0 && this.nom_cni.length>0 && this.telephone.length>0){ 
    return new Promise((resolve)=>{
      let data ={
        cni_register:'cni_reg',
      nom_prenom:this.nom_cni,
      prenom:this.prenom,
      numero_cni:this.Numero_cni,
      date: this.date_cni,
      post_by:this.votre_nom,
      contac :this.telephone,
      email:this.email,
      img1:this.imgres[0],
      img2:this.imgres[1]
      }
      this.http.post(this.url,data).subscribe(async(respons:any)=>{
            this.api_res=respons.succes;
            if(this.api_res==true){
              this.api_res=respons.msg;
              let Alert_option: AlertOptions ={
                header: "FINDER",
                subHeader: " finder the best",
                message: this.api_res,
                backdropDismiss:true,
                translucent: true,
                animated:true,
                keyboardClose:true
                
              };
              (await this.alert.create(Alert_option)).present();
              

            }else
            if(this.api_res==false){
              this.api_res=respons.msg;
              let Alert_option: AlertOptions ={
                header: "FINDER",
                subHeader: " finder the best",
                message: this.api_res,
                backdropDismiss:true,
                translucent: true,
                animated:true,
                keyboardClose:true
                
              };
              (await this.alert.create(Alert_option)).present();

            }
        },error=>{
          console.log("probleme suvenu:"+error);
        });

    });
  } 
  else

      {
        let Alert_option: AlertOptions ={
          header: "Finder ",
          subHeader: " finder the best",
          message: "veillez remplire toutes les cases!",
          backdropDismiss:true,
          translucent: true,
          animated:true,
          keyboardClose:true
          
        };
        (await this.alert.create(Alert_option)).present();

      }
    

  }



  
}
