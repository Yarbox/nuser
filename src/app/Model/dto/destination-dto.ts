export class DestinationDto{
     receiverPhoneNumber :string;
     receiverName :string;
     portId :number;
     province :string;
     city :string;
     street :string;
     phoneNumber:string;
     reciverName:string
     constructor(
           receiverPhoneNumber? :string,
          receiverName? :string,
          portId? :number,
          province? :string,
          city? :string,
          street? :string){
               this.receiverPhoneNumber=receiverPhoneNumber;
               this.phoneNumber=receiverPhoneNumber;
               this.receiverName=receiverName;
               this.portId=portId;
               this.province=province;
               this.city=city;
               this.street=street;
               this.reciverName=receiverName;

     }
}