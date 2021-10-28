/**
 * Created by stegg on 06/10/2021
 */
import {Component, OnInit} from '@angular/core';
import { USERS} from "../mock-users";
import {User} from "../_models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;
  selectedUser?: User;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }
}
