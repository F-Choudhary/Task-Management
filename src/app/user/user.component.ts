// import { Component , computed, signal} from '@angular/core';

// import { DUMMY_USERS } from '../dummy-user';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// import { Component, computed, input, Input } from "@angular/core";

import { Component, EventEmitter, Input , output, Output} from "@angular/core";
import { User } from "./user.model";
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   avatar: string;
//   name: string
// }

// we can use both ways

// interface User {
//   id: string;
//   avatar: string;
//   name: string
  
// }

@Component({
  selector: 'app-user',
  // standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  // imports: [CardComponent]
})

export class UserComponent{
  // @Input({required: true}) id!:string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // @Input({required: true}) user! :  {
  //   id: string;
  //   avatar: string;
  //   name: string
  // }

  @Input({required: true}) user! : User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>()  // this is new

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}



// export class UserComponent {

//   @Input({required: true}) avatar!: string;
//   @Input({required: true}) name!: string;

  // signal \/
  // avatar=input<string>()
  // avatar=input.required<string>()
  // name=input.required<string>()

  // imagePath = computed(() => "assets/users/" + this.avatar())


  // get imagePath() {
  //   return 'assets/users/' + this.avatar
  // }
  // onSelectUser() {

  // }

// }









// export class UserComponent {
//   // selectedUser = DUMMY_USERS[randomIndex]
//   selectedUser = signal(DUMMY_USERS[randomIndex])  //signal


//   // get imagePath() {
//   //   return 'assets/users/' + this.selectedUser.avatar
//   // }

//   imagePath = computed(() => "assets/users/" + this.selectedUser().avatar)

//   onSelectUser(){
//     // console.log("clicked...")
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//     // this.selectedUser = DUMMY_USERS[randomIndex];
//     this.selectedUser.set(DUMMY_USERS[randomIndex])
//   }
// }
