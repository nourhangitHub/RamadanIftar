import { Component, OnInit } from '@angular/core';
import { AccountapiService } from '../../services/accountapi.service';
import { User } from '../../classes/user';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
currentUser: User;
company: string;
country: string;
email: string
name: string;
phone: string;
score: number;
title: string;
  constructor(private accountapi: AccountapiService) { }

  ngOnInit() {
   this.loginUser();
  }
  loginUser(){
    this.accountapi.getaccount().pipe(first()).subscribe(res =>{
      this.currentUser= res;
      this.name = this.currentUser.data.name;
      this.company = this.currentUser.data.company;
      this.country = this.currentUser.data.country;
      this.email = this.currentUser.data.email;
      this.phone = this.currentUser.data.phone;
      this.score = this.currentUser.data.score;
      this.title = this.currentUser.data.title;
    });
  }

}
