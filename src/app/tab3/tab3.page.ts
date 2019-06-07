import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NavController} from '@ionic/angular';
import { listing } from '../models';

  @Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {

  public listings: Array<listing> = new Array();
  public listing: any = {
    name: "",
    location: "",
    imageUrl: "",
    price: 0
  }
  constructor(private httpClient: HttpClient, private navCtrl: NavController) {}
  
  createListing() {
    console.log("Submitting to the server...");
    console.log(this.listing);

    this.httpClient.post("http://localhost:4000/listings", this.listing).subscribe(
      (response: any) => {
        console.log(response);
        this.navCtrl.navigateForward("tab/tabs/tab1");
      },
      (err) => {
        console.log(err);
        alert("Please try again.");
      }
    );
  }

  }
  //   let listing1 = new listing();
  //   listing1.name = "Lovely condo";
  //   listing1.location = "Lisbon, PT";
  //   listing1.price = 120;
  //   listing1.preview = "http://luxpropertyportugal.com/wp-content/uploads/2014/10/Captura-de-ecra%CC%83-2014-10-16-a%CC%80s-11.32.18-284x284.jpg"
  //   this.listings.push(listing1)

  //   let listing2 = new listing();
  //   listing2.name = "Giant mansion"
  //   listing2.location = "Cancun, MX";
  //   listing2.price = 1000
  //   listing2.preview = "https://i.pinimg.com/originals/3c/c0/64/3cc064c16e1e7b39a16130285d3bcfe8.jpg"
  //   this.listings.push(listing2)
  // }




