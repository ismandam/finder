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
    //providers:[ImagePicker,{provide:RouteReuseStrategy,useClass:IonicRouteStrategy}]
  
   
  ],
  providers: [ImagePicker,{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy
   },
   MyserviceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
