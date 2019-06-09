import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { listing } from '../models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { ToastController } from '@ionic/angular';

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

  // newName: string="";
  // newPrice: number=0;
  // newLocation: string="";

  constructor(private activatedRoute: ActivatedRoute, private NavCtrl: NavController,
    private propertyService: PropertyService, private httpClient: HttpClient,
    private toastCtrl: ToastController) { }

  ngOnInit() {

    this.activatedRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);
        const listing_id = (parameters.get("listing_id"));

        this.httpClient.get("http://localhost:4000/listings/" + listing_id).subscribe((response: listing) => {
          console.log(response[0]);
          console.log(listing_id);

          //response will be an object (User) 
          //so we could call response.name, response.email, etc. 
          this.listing.name = response[0].name;
          this.listing.location = response[0].location;
          this.listing.price = response[0].price;
          this.listing.imageUrl = response[0].imageUrl;
          this.listing.id = response[0].id;

        });
      });
  }

  rentalDetails() {
    this.NavCtrl.navigateBack("rental-details")
  }

  saveDetails() {

    this.activatedRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);
        const listing_id = (parameters.get("listing_id"));

        console.log("Submitting to the server...");
        console.log(this.listing);

        this.httpClient.post("http://localhost:4000/listings/" + listing_id, this.listing).subscribe(
          (response: any) => {
            console.log(response);
            this.NavCtrl.navigateForward("tab/tabs/tab1");
            // { queryParams: { userId: response.id } });
          },
      (err) => {
        console.log(err);
        alert("Could not save.");
      });
  });
}
}

