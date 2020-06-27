import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentuserName;
  currentUser;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.currentuserName = this.authservice.currentUserValue;

  }
  ngDoCheck(){
    this.currentUser = this.authservice.currentUserValue;
    if(this.currentUser === null){
      this.currentUser === false ;
    }
  }

}
