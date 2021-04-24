import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { SMS } from '@ionic-native/sms/ngx';
@Component({
  selector: 'app-detail-cni',
  templateUrl: './detail-cni.page.html',
  styleUrls: ['./detail-cni.page.scss'],
})
export class DetailCniPage implements OnInit {
  data:any;
  pictures:any[];
  check=[
    {ischecked:true},
    {ischecked:false}
  ];
  ischecked: boolean;
  constructor(public router:Router, private route:ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
      }
    });
   
    this.check=[
     // {ischecked, val:'vraie'},  
    
    ];
   
    if(this.ischecked){ 
      console.log(" vraie");
      }else if(!this.ischecked){
        console.log(" faux");
      }
      
   }

  ngOnInit() {
    if(this.ischecked){ 
      console.log(" vraie");
      }else if(!this.ischecked){
        console.log(" faux");
      }
      
    
  }
  
  testcheck(){
    if(this.ischecked){ 
      console.log(" vraie");
      }else
      console.log(" faux");
  }
  sendmsg(){
   // this.sms.send('655391094', 'bonjour ismael');
  
   }
  
   readpicture():void{
  
  
   }
   slideOptions={
  initialSlide:0,
  slidesPerview:1,
  autoplay:true,
  loop:true
   };
  

}
