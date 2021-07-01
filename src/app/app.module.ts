import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import{MyserviceService} from './myservice.service';
import{IonicStorageModule} from '@ionic/storage-angular';
import{ImagePicker} from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
//import{FileTransfer} from '@ionic'
import { File } from '@ionic-native/file/ngx';


@NgModule({
  declarations: [AppComponent],
  
  entryComponents: [],
  imports: [
    BrowserModule,
     HttpClientModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
    Ng2SearchPipeModule,
    IonicStorageModule.forRoot(),  
  ],
  
  providers: [
    ImagePicker,
      { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy
      },
   MyserviceService,
   Camera,
   File
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
