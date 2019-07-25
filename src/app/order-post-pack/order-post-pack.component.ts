import { Component, OnInit } from '@angular/core';
import { MainPacks } from '../Model/dto/Main-Packs-dto';
import { originDto } from '../Model/dto/origin-dto';
import { DestinationDto } from '../Model/dto/destination-dto';
import { packsDto } from '../Model/dto/packs-dto';
import { MultiplePacksDto } from '../Model/dto/multiple-packs-dto';
import { WebAppService } from '../Services/webapp-service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-order-post-pack',
  templateUrl: './order-post-pack.component.html',
  styleUrls: ['./order-post-pack.component.css']
})
export class OrderPostPackComponent implements OnInit {
  mainPacks:MainPacks;
  Origin : originDto;
  destinationModel:DestinationDto;
  typeCity:number;
  Cities:any;
  PostPackType:any;
  packs:packsDto[]=[]
  PostpackType:number;
  CountPostPack:number;
   MultiplePacks:MultiplePacksDto;
constructor(
  private _webappService:WebAppService
) {
  this.mainPacks=new MainPacks();
  this.Origin=new originDto();
  this.destinationModel=new DestinationDto();
  this.MultiplePacks=new MultiplePacksDto();
 }

ngOnInit() {
  this._webappService.getPostPackType().subscribe(res=>{
    this.PostPackType=res;
    
 console.log(res);
     });
}
SelectType(type:number){


  this.Cities=null;
  
     this.typeCity=type;
     if(type==1) {
       this.mainPacks.receiveType="port"
     }
       else{

       this.mainPacks.receiveType="doorToDoor"
  }
       this.destinationModel.city=undefined;
    
       if(this.destinationModel.province== undefined)return;
       this._webappService.getCities(this.destinationModel.province,this.typeCity).subscribe(res=>{
        this.Cities=res;
      })
}
SelectCity(city:string){
  
  if(this.typeCity==1)
{
this._webappService.getPortLocation(city).subscribe(res=>{

  this.destinationModel.street=res.location;
  console.log(res);
  return;
})
}
this.destinationModel.city=city;

}


SelectProvince(province:string){
this.destinationModel.city=undefined;

this.destinationModel.province=province;
this._webappService.getCities(province,this.typeCity).subscribe(res=>{
this.Cities=res;
})
}

InsuranceStatus($event){
this.mainPacks.isInsurance=$event.target.checked
}

PackingStatus($event){
this.mainPacks.isPacking=$event.target.checked
}

SelectPostPackType($event){
this.PostpackType=parseInt($event);
}

SelectPostPackCount($event){
this.CountPostPack=$event
}

AcceptPacks(){
  debugger
  if(this.CountPostPack==-1 || this.CountPostPack==undefined){
    alert("لطفا تعداد را درست وارد کنید")
    return
  }
this.packs.push({count:this.CountPostPack,weightId:1,typeId:this.PostpackType})
 console.log(this.packs)
}

getPostPackType(id :number){
    console.log(id, this.PostPackType)
if(this.PostPackType!=undefined)
 return this.PostPackType.find(x=> x.id==id).title

}

deletepack(pack){
  const index = this.packs.indexOf(pack, 0);
if (index > -1) {
this.packs.splice(index, 1);
}
}


paymentType(pay,chah){
   
  if(chah==0)
  chah=false;

this.mainPacks.payAtOrigin=pay;
this.mainPacks.isCashPayment=chah;

}

onSubmit(){
  this.Origin.city="تهران";
  this.Origin.province="تهران";
  this.Origin.longitude="a";
  this.Origin.latitude="a";
  this.MultiplePacks.packs=this.packs;
this.MultiplePacks.origin=this.Origin;
this.MultiplePacks.destination=this.destinationModel;
this.MultiplePacks.content=this.mainPacks.content;
this.MultiplePacks.insurancePrice=this.mainPacks.insurancePrice;
this.MultiplePacks.isInsurance=this.mainPacks.isInsurance;
this.MultiplePacks.isPacking=this.mainPacks.isPacking;
this.MultiplePacks.receiveType=this.mainPacks.receiveType;
this.MultiplePacks.vehicleId=this.mainPacks.vehicleId;
this.MultiplePacks.isCashPayment=this.mainPacks.isCashPayment;
this.MultiplePacks.payAtOrigin=this.mainPacks.payAtOrigin;

swal.showLoading()
this._webappService.PostPackSpa(this.MultiplePacks).subscribe(res=>{
 
this.Origin=new originDto();
this.destinationModel=new DestinationDto();
this.MultiplePacks=new MultiplePacksDto();
this.packs=[];
swal.close()
})
}
}
