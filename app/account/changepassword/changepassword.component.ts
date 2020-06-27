import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountapiService } from 'src/app/services/accountapi.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  loading : boolean;
  submitted : boolean;
  error = '';
  constructor(private fb: FormBuilder, private router: Router, private accountapi: AccountapiService) {
    this.changePasswordForm = this.fb.group({
      email: ['', Validators.required],
      password: ['',Validators.required],
      confirmpassword: ['',Validators.required]
    });
   }

  ngOnInit() {
  }

  get email(){
    return this.changePasswordForm.get('email');
  }
  get password(){
    return this.changePasswordForm.get('password');
  }
  get confirmpassword(){
    return this.changePasswordForm.get('confirmpassword');
  }
  changePassorwd(user){
    this.submitted = true;
    // stop here if form is invalid
    if (this.changePasswordForm.invalid) {
        return;
    }
    this.loading = true;
    this.accountapi.changePassword(user).pipe(first()).subscribe(data => {
     console.log(data);
     this.changePasswordForm.reset();
    },
    error => {
        this.error = error;
        this.loading = false;
    });
  }

}
