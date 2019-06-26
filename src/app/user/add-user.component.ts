import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) {

  }
  showHead = true;

  createUser(): void {
    console.log(this.user);

if(this.user.email == undefined || this.user.firstName == undefined || this.user.lastName == undefined) {
  return alert("Email or FirstName or LastName Values are Empty");
}
    this.userService.createUser(this.user)
        .subscribe( data => {
          var str =Object.keys(data).length === 0;
          if(str == false) {
          if(data != null) {
            console.log(data);
            Object.keys(data).forEach(key => {
              var obj1 = data[key];
              alert(obj1);
          } );
        }
       } else {
          alert("Employee added successfully.");
          }
        });

  };

}
