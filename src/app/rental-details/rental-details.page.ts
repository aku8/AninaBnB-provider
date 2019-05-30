import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { listing } from '../models';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

    public nameOfListing: string;
    public listingId: number;
    public currentListing: listing;

  constructor(private activatedRoute: ActivatedRoute, private NavCtrl: NavController,
    private propertyService: PropertyService) { }

  ngOnInit() {
    let arrow = (data:any) => {
      this.nameOfListing = data.params.listingName;
      this.listingId = data.params.listingId;
      this.currentListing = this.propertyService.findListingById(this.listingId);

    };

    this.activatedRoute.queryParamMap.subscribe(
      arrow);
  }

  navToRentals(){
    this.NavCtrl.navigateBack("tab/tabs/tab1");
  }

  editDetails(){
    this.NavCtrl.navigateForward("editrental")
  
  }

}
