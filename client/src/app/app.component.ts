import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App'; // infers type from value (string)
  users: any; // any, turns off type safety for a property

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({  // Adding subscribe will observe the observable, forcing the request to go get the data.
      next: response => this.users = response, // callback function, what we want to do with the returned data (response)
      error: error => console.log(error), // callback function, handle error
      complete: () => console.log('Request has completed') // what to do when done
    })
  }
}
