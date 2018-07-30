import { Component, OnInit, OnChanges,Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
@Component({
  selector: 'app-sign-up-steps',
  templateUrl: './sign-up-steps.component.html',
  styleUrls: ['./sign-up-steps.component.css']
})
export class SignUpStepsComponent implements OnInit,OnChanges {

  constructor(private store: NgRedux<IAppState>) { }


  step1: boolean = true;
  step2:boolean = false;
  step3:boolean = false;
  ngOnInit() {
   this.fetchValue();
  }
  ngOnChanges() {
    
  }
fetchValue() {
  this.store.subscribe( () =>{
    this.step1 = this.store.getState().step1;    
    this.step2 = this.store.getState().step2;    
    this.step3 = this.store.getState().step3;
    }  );
  }
}
