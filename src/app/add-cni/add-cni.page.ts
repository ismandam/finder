
import { Component, OnInit } from '@angular/core';
import{ImagePicker} from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-add-cni',
  templateUrl: './add-cni.page.html',
  styleUrls: ['./add-cni.page.scss'],
})
export class AddCniPage implements OnInit {
options:any;
imgres:any;
croppedImagepath = "";
isLoading = false;
imagePickerOptions = {
  maximumImagesCount: 1,
  quality: 50
};
  constructor(
    public image:ImagePicker,
    public actionSheetController: ActionSheetController,
    private camera: Camera
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
      this.croppedImagepath = 'data:image/jpeg;base64,' + imageData;
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
}
