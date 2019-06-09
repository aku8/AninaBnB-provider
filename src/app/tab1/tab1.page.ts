import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { listing } from '../models';
import { PropertyService } from '../services/property.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  public listings: Array<listing> = [];
  constructor(private navCtrl: NavController, private propertyService: PropertyService, private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {

    // this.propertyService.getAllListings();
    // this.listings = this.propertyService.listings;
  }
  navToListing(listings: listing) {
    this.navCtrl
      .navigateForward("rental-details", {
        queryParams: {
          listing_id: listings.id

        }
      });
  }

  ngOnInit() {
    const userId = localStorage.getItem("user_id");
    console.log("PROFILE USER ID: ", userId);
    this.activatedRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);
      
    this.httpClient.get("http://localhost:4000/listings/user/" + userId).subscribe(
        (response: any) => {
          console.log(response);
          this.listings = response;
          //this.navCtrl.navigateForward("tab/tabs/tab1", { queryParams: { userId: response.id } });
        },
        (err) => {
          console.log(err);
          alert("Could not retrieve listings.");
        }
      );
      });
    }
    rentalDetails() {
      this.navCtrl.navigateForward("rental-details");
    }

    newRental() {
      this.navCtrl.navigateForward("tab/tabs/tab3")
    }
  }

