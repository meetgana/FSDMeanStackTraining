import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../modal/user';

@Component({
  selector: 'app-EditEmployee',
  templateUrl: './EditEmployee.component.html',
  styleUrls: ['./EditEmployee.component.css']
})
export class EditEmployeeComponent {
  
  user:User = new User();

  constructor() {};

  editEmployee(EditEmployeeForm: NgForm){
    console.log(this.user);
    alert ("Update successful")
  }


}