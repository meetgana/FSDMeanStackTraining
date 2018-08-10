import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { homeComponent } from '../home/home.component';
import { headerComponent } from '../header/header.component';
import { AddEmployeeComponent } from '../AddEmployee/AddEmployee.component';
import { EditEmployeeComponent } from '../EditEmployee/EditEmployee.component';
import { routing } from '../app.route';
import { UserService } from './user.service';


@NgModule({
  imports: [
    CommonModule, FormsModule, routing, HttpClientModule
  ],
  providers:[UserService],
  declarations: [homeComponent, headerComponent, AddEmployeeComponent, EditEmployeeComponent]
})
export class UserModule { }