import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editrental',
  templateUrl: './editrental.page.html',
  styleUrls: ['./editrental.page.scss'],
})
export class EditrentalPage implements OnInit {

  constructor(private NavCtrl: NavController) { }

  ngOnInit() {
  }

  rentalDetails(){
    this.NavCtrl.navigateBack("rental-details")
  }


}
