//import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post/list/list.component';
import { UserListComponent } from './user/list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full' , // по този начин изключваме другите пътища и остават само празен стринг;
    redirectTo: '/user-list'
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'post-list',
    component: PostListComponent
  }

];
export const AppRoutingModule = RouterModule.forRoot(routes); // с това заместихме долното
//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
//})
//export class AppRoutingModule { }
