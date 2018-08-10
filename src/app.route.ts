import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { headerComponent } from './header/header.component';
import { AddEmployeeComponent } from './AddEmployee/AddEmployee.component';
import { EditEmployeeComponent } from './EditEmployee/EditEmployee.component';

const routes: Routes = [
  {path: 'home', component: homeComponent},
  {path: 'header', component: headerComponent},
  {path: 'AddEmployee', component: AddEmployeeComponent},
  {path: 'EditEmployee', component: EditEmployeeComponent},
  {path: '**', pathMatch:'full', redirectTo: '/home'}
  ]
  
export const routing = RouterModule.forRoot(routes);