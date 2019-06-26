import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {UpdateUserComponent} from './user/update-user.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'apps', component: AppComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'update', component: UpdateUserComponent }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
