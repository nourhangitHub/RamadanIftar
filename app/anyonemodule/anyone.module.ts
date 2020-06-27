import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AnyoneRoutingModule } from './anyone-routing.module';
import { SharedmoduleModule } from '../shared/sharedmodule/sharedmodule.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    SignupFormComponent,
    SignupPageComponent,
  ],
  imports: [
    CommonModule,
    SharedmoduleModule,
    AnyoneRoutingModule
  ],
  exports: [
    LoginPageComponent,
    SignupFormComponent,
    SignupPageComponent,
  ]
})
export class AnyoneModule { }
