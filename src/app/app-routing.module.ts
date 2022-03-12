import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'admin', loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule )
  },
  {
    path:'user', loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule )
  },
  {
    path:'login', loadChildren:()=>import('./login/login.module').then(mod=>mod.LoginModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
