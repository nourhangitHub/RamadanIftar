import { HeaderComponent } from '../sharedmodule/header/header.component';
import { LoginComponent } from '../sharedmodule/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedmoduleModule { }
