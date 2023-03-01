
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './component/archive/archive.component';
import { BinComponent } from './component/bin/bin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DisplaynoteComponent } from './component/displaynote/displaynote.component';
import { GetAllnoteComponent } from './component/get-allnote/get-allnote.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },

  {
    path: 'home', component: DashboardComponent,
    children: [{ path: 'createnote', component: GetAllnoteComponent },
    { path: 'displaynote', component: DisplaynoteComponent },
    { path: 'bin', component: BinComponent },
    { path: 'archive', component: ArchiveComponent }]
  }]

// {path: '' , redirectTo:'signin', pathMatch:'full'}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
