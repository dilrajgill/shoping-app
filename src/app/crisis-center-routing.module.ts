import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RegistrationComponent} from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AlwaysAuthGuard } from './always-auth-gaurd.service';
import { LoggedInUserComponent } from './logged-in-user/logged-in-user.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterComponentComponent } from './crisis-center-component/crisis-center-component.component';
import { CrisisListComponentComponent } from './crisis-list-component/crisis-list-component.component';
import { CrisisDetailComponentComponent } from './crisis-detail-component/crisis-detail-component.component';
import { CrisisCenterHomeComponentComponent } from './crisis-center-home-component/crisis-center-home-component.component';



const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: 'hello',
        component: CrisisListComponentComponent,
        children: [
          {
            path: 'h2',
            component: CrisisDetailComponentComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponentComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterModule  { }