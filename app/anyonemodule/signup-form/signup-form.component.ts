import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
signupForm: FormGroup;
loading : boolean;
submitted : boolean;
error = '';
  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      company: ['',Validators.required],
      title: ['', Validators.required],
      phone: ['',Validators.required],
      email: ['', Validators.required],
      password: ['',Validators.required],
      country: ['',Validators.required]
    });
  }

  ngOnInit() {
  }
  get name(){
    return this.signupForm.get('name');
  }
  get company(){
    return this.signupForm.get('company');
  }
  get title(){
    return this.signupForm.get(' title');
  }
  get phone(){
    return this.signupForm.get('phone');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get country(){
    return this.signupForm.get('country');
  }

  signupSubmit(user){
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }
    this.loading = true;
    this.authservice.regester(user).pipe(first()).subscribe(data => {
      this.router.navigate(['../home']);
    },
    error => {
        this.error = error;
        this.loading = false;
    });
  }
}
