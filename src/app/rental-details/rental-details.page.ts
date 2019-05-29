import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  constructor(private NavCtrl: NavController) { }

  ngOnInit() {
  }

  navToRentals(){
    this.NavCtrl.navigateBack("tab/tabs/tab1");
  }

  editDetails(){
    this.NavCtrl.navigateForward("editrental")
  
  }

}
