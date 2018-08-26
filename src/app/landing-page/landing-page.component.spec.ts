import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '..//app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { RegistrationComponent } from '../registration/registration.component';
import { FaqComponent } from '../faq/faq.component';
import { SignUpStepsComponent } from '../sign-up-steps/sign-up-steps.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { LoggedInUserComponent } from '../logged-in-user/logged-in-user.component';
import {APP_BASE_HREF} from '@angular/common';
describe('LandingPageComponent suit', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, AppRoutingModule, NgReduxModule, FormsModule, HttpClientModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [LandingPageComponent, SignUpStepsComponent,
        RegistrationComponent, FaqComponent, LoggedInUserComponent, ErrorPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('testcase1 ', () => {
     component.incrementCustomer();
     expect(component.userNumber).toBe(11);
  });
});
