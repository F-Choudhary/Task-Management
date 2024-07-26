import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS
  // selectedUserId = 'u1';
  selectedUserId? : string;

  get selectedUser(){
    return this.users.find((user) =>user.id === this.selectedUserId)!
  }

  onSelectUser(id: string){
    // console.log("selected user with ID "+id)
    this.selectedUserId = id

  }
}
