import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'THE Dating app';
  
  //"any" indicates that user can be any type. Turns of type safety.
  users: any;

  // don't need HttpClient if not doing getUsers(). Commenting out this version of constructor
  //constructor(private http: HttpClient, private accountService: AccountService) {}

  constructor(private accountService: AccountService) {}
  
  ngOnInit(): void {
    // No longer using but keeping for reference
    //this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  /*no longer using but keeping for reference
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
  */
}
