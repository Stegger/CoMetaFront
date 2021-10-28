import { Component } from '@angular/core';
import {User} from "./_models/user";
import {AuthenticationService} from "./_services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoMeta - Talking Securely & Free';
  user: string;

  constructor(private authenticationService: AuthenticationService) {
    this.user = this.authenticationService.getUsername();
  }

}
