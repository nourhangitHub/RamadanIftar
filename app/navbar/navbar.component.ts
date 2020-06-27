import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from './../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {
  loading : boolean;
  error = '';
  isOpen = false;
  currentUser;
  constructor(private authservice: AuthService) { }

  ngOnInit() {

  }
  ngDoCheck(){
    this.currentUser = this.authservice.currentUserValue;
  }
  toggle(){
    this.isOpen = !this.isOpen;
  }
  logout(){
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.authservice.logout(user).subscribe(data => {
      this.loading = true;
    },
    error => {
        this.error = error;
        this.loading = false;
    });

  }

}
