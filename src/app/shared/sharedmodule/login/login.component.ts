import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formLogin : FormGroup;
loading : boolean;
submitted : boolean;
error = '';
  constructor(private fb: FormBuilder, private authservice: AuthService, private route: ActivatedRoute, private router: Router) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['',Validators.required]
    });
   }

  ngOnInit() {
  }
  get email(){
    return this.formLogin.get('email');
  }
  get password(){
    return this.formLogin.get('password');
  }
  loginSubmit(user){
    this.submitted = true;
    // stop here if form is invalid
    if (this.formLogin.invalid) {
        return;
    }
    this.loading = true;
    this.authservice.login(user).pipe(first()).subscribe(data => {
      this.router.navigate(['../home']);
    },
    error => {
        this.error = error;
        this.loading = false;
    });
  }
}
