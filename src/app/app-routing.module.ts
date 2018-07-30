import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RegistrationComponent} from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
    
  {path:'' , redirectTo: '/landing', pathMatch: 'full' },
  {path:'registration/:id' , component: RegistrationComponent},   
  {path:'landing' , component: LandingPageComponent},   
  {path:'faq' , component: FaqComponent},  
  {path:'**' , component: ErrorPageComponent}

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
 
  
