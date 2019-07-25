import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
 

 
@Injectable()
export class WebAppService{
 private api:string;
 private httpLoding:boolean=false;     
private packsRuning:any;
 private IsNet:boolean=false;
 private PostPackId:number;
constructor(private _http:HttpClient ){
    //this.api="http://localhost:11926/api/vv2/";
  this.api="https://api.yarbox.co/api/vv2/";
}
 

 
 
 PostPackSpa(model){
   let headers = new HttpHeaders();
   headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
 
 return  this._http.post(this.api+"packs/MultiplePacksSpa",model,{headers:headers},).pipe(
       map((response:any) => {
 
       return    response
       } )
       );
}

 

getPortLocation(city:string){
 
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
 
return  this._http.get(this.api+"provinces/p/getPortLocation?city="+city,{headers:headers},).pipe(
      map((response:any) => {
     
      return    response
      } )
      );
}
getPostPackType(){
 
 let headers = new HttpHeaders();
headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
headers = headers.set('Content-Type', 'application/json; charset=utf-8');

return  this._http.get(this.api+"pack-data/types",{headers:headers}).pipe(
    map((response:any) => {
 
    return    response.items
    } )
    );
}
getCities(provinces:string,type:number):Observable<any>{
    
 
let headers = new HttpHeaders();
headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
headers = headers.set('Content-Type', 'application/json; charset=utf-8');

return  this._http.get(this.api+"provinces/"+provinces+"/GetCityByType?type="+type,{headers:headers}).pipe(
    map((response:any) => {
     
return  response.items
    } )
    );
}
}