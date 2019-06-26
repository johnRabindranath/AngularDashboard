import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Login } from '../models/login';
import { User } from '../models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  showHead: boolean = true;
  login: Login = new Login();

  constructor(private router: Router) {}
  gotoHome(){
    console.log(this.login);

     if(this.login.username == "admin" && this.login.password =="admin")
     {
      this.showHead =false;
      this.router.navigate(['/apps']);  // define your component where you want to go
     } 
     else if (this.login.username == undefined|| this.login.password == undefined) {
       
      alert("username or password is empty");
     }
      
      else {
       alert("username or password is incorrect");

     }
     

   
}

  ngOnInit() {
  }

}
