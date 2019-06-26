import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

  user: User = new User();
  showHead = true;
  constructor(private router: Router, private userService: UserService) {

  }

  updateUser(): void {
    console.log(this.user);
    if(this.user.id == undefined ) {
      return alert("Id is Empty");
    }
    this.userService.updateUser(this.user)
        .subscribe( data => {
          if(data != null) {
            console.log(data);
            Object.keys(data).forEach(key => {
              var obj1 = data[key];
              alert(obj1);
          } );
        }        });

  };

}
