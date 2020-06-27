import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditaccountComponent } from './editaccount/editaccount.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: AccountComponent},
  { path: 'editaccount', component: EditaccountComponent},
  { path: 'changepassword', component: ChangepasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountmoduleRoutingModule { }
