import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AppComponent } from './app.component';
import { SourceDBComponent } from './source-db/source-db.component';

const routes: Routes = [
  { path: 'signinPage', component: SigninComponent },
  {path: 'compareDB', component: SourceDBComponent },
  { path: '', redirectTo: '/signinPage', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
