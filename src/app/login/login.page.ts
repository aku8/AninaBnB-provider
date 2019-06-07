import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = "";
  public password: string = "";

  constructor(private navCtrl: NavController, private httpClient: HttpClient) { }

  login() {
    const authReq = {
      email: this.email,
      password: this.password
    };
    console.log("Checking with server...");

    this.httpClient.post("http://localhost:4000/users/authentication", authReq).subscribe(
      (response: any) => { //response is the user object
        const userId = response.id;

        //STORING
        localStorage.setItem("user_id", userId);
        this.navCtrl.navigateForward("tab/tabs/tab2", {
          queryParams: {
            user_id: userId
          }
        });
      },
      (err) => {
        console.log(err);
        alert("Invalid login. Please check and try again!");
      }
    )
  }
  
  ngOnInit() {
  }
  navToExplore(){
    this.navCtrl.navigateForward("tab/tabs/tab1");
  }
  navToRegister(){
    this.navCtrl.navigateForward("register");
  }
  }


