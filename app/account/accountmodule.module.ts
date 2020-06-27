import { SharedmoduleModule } from './../shared/sharedmodule/sharedmodule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditaccountComponent } from './editaccount/editaccount.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AccountComponent } from './account/account.component';

import { AccountmoduleRoutingModule } from './accountmodule-routing.module';


@NgModule({
  declarations: [
    AccountComponent,
    ChangepasswordComponent,
    EditaccountComponent,

  ],
  imports: [
    CommonModule,
    AccountmoduleRoutingModule,
    SharedmoduleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountmoduleModule { }
