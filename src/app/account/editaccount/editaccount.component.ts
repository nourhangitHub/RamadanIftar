import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccountapiService } from 'src/app/services/accountapi.service';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.scss']
})
export class EditaccountComponent implements OnInit {
  updateForm: FormGroup;
  currentUser: User;
  loading : boolean = false;
  submitted : boolean = false;
  error = '';
  constructor(private fb: FormBuilder, private accountapi: AccountapiService, private router: Router) {
  }

  ngOnInit() {
    this.buildUpdate();
    this.logtUser()
  }
  logtUser(){
    this.accountapi.getaccount().pipe(first()).subscribe(res =>{
      this.currentUser= res;
      this.updateForm.setValue({
        name: this.currentUser.data.name,
        company: this.currentUser.data.company,
        title: this.currentUser.data.title,
        phone: this.currentUser.data.phone,
        email: this.currentUser.data.email,
        country: this.currentUser.data.country
      })
    });
  }

  buildUpdate(){
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      company: ['',Validators.required],
      title: ['', Validators.required],
      phone: ['',Validators.required],
      email: ['', Validators.required],
      country: ['',Validators.required]
    });
  }
  get name(){
    return this.updateForm.get('name');
  }
  get company(){
    return this.updateForm.get('company');
  }
  get title(){
    return this.updateForm.get(' title');
  }
  get phone(){
    return this.updateForm.get('phone');
  }
  get email(){
    return this.updateForm.get('email');
  }
  get password(){
    return this.updateForm.get('password');
  }
  get country(){
    return this.updateForm.get('country');
  }
  updateAccount(user){
    this.submitted = true;
    // stop here if form is invalid
    if (this.updateForm.invalid) {
        return;
    }
    this.loading = true;
    this.accountapi.updateAccount(user).pipe(first()).subscribe(data => {
      console.log(data);
    },
    error => {
        this.error = error;
        this.loading = false;
    });
  }
}
