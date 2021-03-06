import { Component, OnInit } from '@angular/core';
import {FetchTextMessagesService} from '../fetch-text-messages.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { REMOVE_ALL_TODOS } from '../actions';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @select() lastUpdate;
  @select() myName;

  signInToday : string;
  get : string;
  discount : string;
  discountNumb: number;
  percentSign : string;
  introduction: string;
  login: string;
  userNumber: number;
  userId: string;
  landingPageText :any;
  constructor(private textMessages :FetchTextMessagesService,private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.fetchTextValues();
    console.log('ngOnInit');
    this.userNumber =10;
    this.landingPageText = this.textMessages.landingPageKeys;
  }
  ngOnChanges() {   
    console.log('ngOnChange');
    
  }
  incrementCustomer() : void {
    console.log('inside incrementCustomer');
    this.userNumber = this.userNumber +1;
    console.log('this.userNumber :'+this.userId);
  } 
  fetchTextValues() : void {
    this.signInToday = 'Sign In Today'; 
    this.discountNumb = 25; 
    this.percentSign = '%';
    this.discount = 'Discount';
    this.login = 'Login';
    this.introduction ='See Special Offers on Canada\'s number ONE shopping website.Ours is the fourth most valuable public company in the world (behind only Apple, Alphabet, and Microsoft), the largest Internet company by revenue in the world, and after Walmart, the second largest employer in the United States.';
  
  }
}
