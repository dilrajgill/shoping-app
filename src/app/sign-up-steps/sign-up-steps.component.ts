import { Component, OnInit, OnChanges } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';
import {  INITIAL_STATE } from '../store';
@Component({
  selector: 'app-sign-up-steps',
  templateUrl: './sign-up-steps.component.html',
  styleUrls: ['./sign-up-steps.component.css']
})
export class SignUpStepsComponent implements OnInit,OnChanges {

  constructor() { }


  @select() step1;
  @select() step2;
  @select() step3;
  ngOnInit() {
   
  }
  ngOnChanges() {
    console.log(INITIAL_STATE.step1);
  }

}
