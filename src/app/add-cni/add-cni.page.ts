
import { Component, OnInit } from '@angular/core';
import{ImagePicker} from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-add-cni',
  templateUrl: './add-cni.page.html',
  styleUrls: ['./add-cni.page.scss'],
})
export class AddCniPage implements OnInit {
options:any;
imgres:any;
  constructor(public image:ImagePicker) { }
imagePicker(){
this.options= {
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
  ngOnInit() {
  }

}
