import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'; 

@NgModule({
  declarations: [
    ListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
