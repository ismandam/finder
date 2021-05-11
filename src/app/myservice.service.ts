import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


const Info_Api_url="http://192.168.100.62/finder/super/allCni.php";
const Info_Api_url1="http://169.254.248.202/finder/super/ionic_api.php";
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public items: any=[];
  constructor( public http:HttpClient) { 
console.log("mon service info");

  }

  getAllInfo(){
  this.items= this.http.get(`${Info_Api_url}`);
  return this.http.get(`${Info_Api_url}`);

  }
  /*
  postInfo(body:{}){
  
    this.items=this.http.post(Info_Api_url1,body);
    return Response;
  }*/
}
