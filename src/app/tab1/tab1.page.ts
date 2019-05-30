import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { listing } from '../models';
import { PropertyService } from '../services/property.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public listings: Array<listing> = [];
  constructor(private navCtrl: NavController, private propertyService: PropertyService) {

    this.propertyService.getAllListings();
    this.listings = this.propertyService.listings;
  }
  navToListing(listings: listing) {
    this.navCtrl
      .navigateForward("rental-details", {
        queryParams: {
          q: "ionic",
          listingName: listings.name,
          listingId: listings.id

        }
      });
  }

  rentalDetails() {
    this.navCtrl.navigateForward("rental-details");
  }

  newRental() {
    this.navCtrl.navigateForward("tab/tabs/tab3")
  }
}

