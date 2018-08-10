
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { headerComponent } from './header/header.component';
import { homeComponent } from './home/home.component';
import { AddEmployeeComponent } from './AddEmployee/AddEmployee.component';
import { EditEmployeeComponent } from './EditEmployee/EditEmployee.component';
import { routing } from './app.route';
import { UserService } from './user/user.service';


@NgModule({
  imports: [
    CommonModule, BrowserModule, routing, FormsModule
    ],
    declarations: [
      AppComponent, headerComponent, homeComponent, AddEmployeeComponent, EditEmployeeComponent
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  key:number = 0;
}
