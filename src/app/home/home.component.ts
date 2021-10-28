/**
 * Created by stegg on 11/10/2021
 */
import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string | null;
  errormessage: string = '';

  constructor(private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit() {
      //TODO Create message property and get messages from MessageService (When avilable)
  }

}
