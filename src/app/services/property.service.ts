import { Injectable } from '@angular/core';
import { listing } from '../models';

//able to be injected to other components
@Injectable({
  providedIn: 'root'
  //provided in root application
})
export class PropertyService {

  public listings: Array<listing> = [];
  //This array remains filled and is modifiable between pages
  

  constructor() { }

  //Idea: this function can be used on many pages.
  getAllListings() {
    this.listings = [];

    //following data will be replaced with calls to the server. 
  //   let listing1 = new listing();
  //   listing1.name = "Lovely condo";
  //   listing1.location = "Lisbon, PT";
  //   listing1.price = 120;
  //   listing1.id = 1;
  //   listing1.preview = "http://luxpropertyportugal.com/wp-content/uploads/2014/10/Captura-de-ecra%CC%83-2014-10-16-a%CC%80s-11.32.18-284x284.jpg";
  //   this.listings.push(listing1);

  //   let listing2 = new listing();
  //   listing2.name = "Giant mansion"
  //   listing2.location = "Cancun, MX";
  //   listing2.price = 1000
  //   listing2.id = 2;
  //   listing2.preview = "https://i.pinimg.com/originals/3c/c0/64/3cc064c16e1e7b39a16130285d3bcfe8.jpg"
  //   this.listings.push(listing2);

  //   let listing3 = new listing();
  //   listing3.name = "Central apartment in Shanghai";
  //   listing3.location = "Shanghai, CN";
  //   listing3.price = 300;
  //   listing3.id = 3;
  //   listing3.preview = "https://assets.yellowtrace.com.au/wp-content/uploads/2017/09/Shanghai-Apartment-with-Bookshelves-by-Atelier-TAO-C-Yellowtrace-01.jpg";
  //   this.listings.push(listing3);  

  //   let listing4 = new listing();
  //   listing4.name = "Perfect apartment in Barcelona";
  //   listing4.location = "Barcelona, SP";
  //   listing4.price = 150;
  //   listing4.id = 4;
  //   listing4.preview = "https://66.media.tumblr.com/04f05993c939955ef182be4a3df82613/tumblr_p46wyaYgbo1w2d80ho1_640.jpg";
  //   this.listings.push(listing4);

  //   let listing5 = new listing();
  //   listing5.name = "Party Mansion in Cancun";
  //   listing5.location = "Cancun, MX";
  //   listing5.price = 1000;
  //   listing5.id = 5;
  //   listing5.preview = "https://d3glb5zioac6h9.cloudfront.net/uploads/sources/199094/detail_large/1.jpg?1503256779";
  //   this.listings.push(listing5);
  // };


  // findListingById(id: number): listing {

  //   let foundListing: listing = null;
  //   this.listings.forEach(
  //     (listing: listing) => {
  //       if(listing.id === id) {
  //         foundListing = listing;
  //       }
  //     }
  //   );
  //   return foundListing;

  // }


  // }
  }
}

