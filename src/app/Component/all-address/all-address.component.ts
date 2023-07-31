import { Component, OnInit } from '@angular/core';
import { UserAddressDTO } from 'src/app/Models/user-address-dto';
import { UserService } from 'src/app/Services/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-all-address',
  templateUrl: './all-address.component.html',
  styleUrls: ['./all-address.component.css']
})
export class AllAddressComponent implements OnInit {
  userId:string= "f7caa6d4-d3e9-4a95-8796-921ae79d8775";    //localStorage.getItem('userId');
  userAddress!: UserAddressDTO[];
  constructor(private userServices:UserService)
  {
    
  }
  ngOnInit(): void {
  const userAddressData = localStorage.getItem('userAddress');
    if (userAddressData) {
      this.userAddress = JSON.parse(userAddressData);
    }
    console.log(this.userAddress)
  }

  deleteAdd(addId:number, userAddressId:number){
    const confirmation = confirm('Are you sure you want to retrieve this order?');
    if(confirmation){
      console.log(addId," ",userAddressId);
    }
  }
}
