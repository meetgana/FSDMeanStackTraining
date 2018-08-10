import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../modal/user';

@Component({
  selector: 'app-AddEmployee',
  templateUrl: './AddEmployee.component.html',
  styleUrls: ['./AddEmployee.component.css']
})
export class AddEmployeeComponent {

  user:User = new User();

  constructor() { }

  addEmployee(AddEmployeeForm: NgForm){
    console.log(this.user);
    alert("Employee successfully added")
  }


}