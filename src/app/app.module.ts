import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
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
import { HttpClientModule } from'@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopingFooterComponent,
    LandingPageComponent,
    HeaderComponentComponent,
    RegistrationComponent,
    SignUpStepsComponent,
    FaqComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
}
}
