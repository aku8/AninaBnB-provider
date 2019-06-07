import { Component, OnInit } from '@angular/core';
import { review } from '../models/review.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public user: User = new User();


  public currentUserId: number;

  public reviews: Array<review> = new Array();
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {


  //   let review1 = new review();
  //   review1.writer = "Alicia Byrne";
  //   review1.review = "Had a great stay! Thanks!";
  //   this.reviews.push(review1);

  //   let review2 = new review();
  //   review2.writer = "Leah Wang";
  //   review2.review = "Amazing vacation!";
  //   this.reviews.push(review2);
   }
  ngOnInit() {
    const userId = localStorage.getItem("user_id");
    console.log("PROFILE USER ID: ", userId);
    this.activatedRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);

        //pulls from url 
        // const userId = (parameters.get("user_id"));

        //execute http client - get the user from the database given an id
        // this.http.get("http://localhost:4000/users/" + userId);
        //or: this.http.get(`http://localhost:4000/users/${userId}`);

        this.httpClient.get("http://localhost:4000/users/" + userId).subscribe((response: User) => {
          console.log(response);
          console.log(userId);

          //response will be an object (User) 
          //so we could call response.name, response.email, etc. 
          this.user.firstname = response.firstname;
          this.user.email = response.email;
          this.user.id = response.id;
      });
        //express:
        //app.get("/users/:id")
      }
    );
  }

}
