import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  ngOnInit() {
  }
  constructor(private navCtrl: NavController) {}
  navToExplore(){
    this.navCtrl.navigateForward("tab/tabs/tab1");
  }

  navToRentalDetails(){
    this.navCtrl.navigateForward("rental-details");
  }

}
