import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { listing } from '../models';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-editrental',
  templateUrl: './editrental.page.html',
  styleUrls: ['./editrental.page.scss'],
})
export class EditrentalPage implements OnInit {

  public listing: any = {
    name: "",
    location: "",
    imageUrl: "",
    price: ""
  }
  public nameOfListing: string;
  public listingId: number;
  public currentListing: listing;

  newName: string="";
  newPrice: number=0;
  newLocation: string="";

constructor(private activatedRoute: ActivatedRoute, private NavCtrl: NavController,
  private propertyService: PropertyService, private httpClient: HttpClient) { }

ngOnInit() {
  let arrow = (data:any) => {
    this.nameOfListing = data.params.listingName;
    this.listingId = data.params.listingId;
    this.currentListing = this.propertyService.findListingById(this.listingId);

  };

  this.activatedRoute.queryParamMap.subscribe(
    arrow);
}
  rentalDetails(){
    this.NavCtrl.navigateBack("rental-details")
  }

  //Help!
  saveDetails(){
    console.log("Submitting to the server...");
    console.log(this.listing);

    this.httpClient.post("http://localhost:4000/listings", this.listing).subscribe(
      (response: any) => {
        console.log(response);
        this.NavCtrl.navigateForward("tab/tabs/tab1");
        // { queryParams: { userId: response.id } });
      },
      (err) => {
        console.log(err);
        alert("Could not save.");
      }
    );
  }


}
