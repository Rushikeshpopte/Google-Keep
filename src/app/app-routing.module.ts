
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './component/log-in/log-in.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [

  {path: 'signin', component:SigninComponent},
  {path: 'registration' , component:RegistrationComponent},
  {path: '' , redirectTo:'signin', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
