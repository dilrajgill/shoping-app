import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RegistrationComponent} from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    
  {path:'' , redirectTo: '/landing', pathMatch: 'full' },
  {path:'registration/:id' , component: RegistrationComponent},   
  {path:'landing' , component: LandingPageComponent},   
  {path:'**' , component: LandingPageComponent}

];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)

  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { 
}
 
  
