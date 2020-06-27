import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../anyonemodule/login-page/login-page.component';
import { SignupPageComponent } from '../anyonemodule/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnyoneRoutingModule { }
