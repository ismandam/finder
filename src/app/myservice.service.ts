import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

const Api="allCni.php"
//const Info_Api_url="http://192.168.100.69/"+"finder/super/"+Api;
const Info_Api_url="http://192.168.1.110/"+"finder/super/"+Api;


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private Info_Api_url1="http://169.254.248.202/finder/super/ionic_api.php";
  public items: any=[];
  constructor( public http:HttpClient) { 
console.log("mon service info");

  }

  getAllInfo(){
  this.items= this.http.get(`${Info_Api_url}`);
  return this.http.get(`${Info_Api_url}`);

  }

  getAllInfo2(){
    
  this.http.get(`${Info_Api_url}`);
    return this.http.get(`${this.Info_Api_url1}`);
   // return this.http.get(`${ALL_COURSE_BY_FACULTY_API_URL}?codeFaculty=${codeFaculty}`);
    }
  /*
  postInfo(body:{}){
  
    this.items=this.http.post(Info_Api_url1,body);
    return Response;
  }*/
}
