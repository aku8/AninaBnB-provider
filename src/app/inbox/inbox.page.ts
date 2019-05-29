import { Component, OnInit } from '@angular/core';
import { message } from '../models/message.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  public messages: Array <message> = new Array();
  constructor() {
    let message1 = new message();
    message1.sender = "Leah Wang";
    message1.message = "How can I help you?";
    this.messages.push(message1);

    let message2 = new message();
    message2.sender = "Jen Mashaal";
    message2.message = "What dates were you looking at?";
    this.messages.push(message2);
   }

  ngOnInit() {
  }

}
