import { Component, OnInit } from '@angular/core';
import { review } from '../models/review.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public reviews: Array<review> = new Array();
  constructor() {
    let review1 = new review();
    review1.writer = "Alicia Byrne";
    review1.review = "Had a great stay! Thanks!";
    this.reviews.push(review1);

    let review2 = new review();
    review2.writer = "Leah Wang";
    review2.review = "Amazing vacation!";
    this.reviews.push(review2);
   }

  ngOnInit() {
  }

}
