import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShopingFooterComponent } from './shoping-footer/shoping-footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignUpStepsComponent } from './sign-up-steps/sign-up-steps.component';
import { FaqComponent } from './faq/faq.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoggedInUserComponent } from './logged-in-user/logged-in-user.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterComponentComponent } from './crisis-center-component/crisis-center-component.component';
import { CrisisListComponentComponent } from './crisis-list-component/crisis-list-component.component';
import { CrisisDetailComponentComponent } from './crisis-detail-component/crisis-detail-component.component';
import { CrisisCenterHomeComponentComponent } from './crisis-center-home-component/crisis-center-home-component.component';
import { CrisisCenterModule } from './crisis-center-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShopingFooterComponent,
    LandingPageComponent,
    HeaderComponentComponent,
    RegistrationComponent,
    SignUpStepsComponent,
    FaqComponent,
    ErrorPageComponent,
    LoggedInUserComponent,
    SearchResultsComponent,
    CrisisCenterComponent,
    CrisisCenterComponentComponent,
    CrisisListComponentComponent,
    CrisisDetailComponentComponent,
    CrisisCenterHomeComponentComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule, FormsModule, ReactiveFormsModule, CrisisCenterModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
}
}
