import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeoApiService } from '../geo-api.service';
import { CountryNamesService } from '../country-names.service';
import { myName } from '../todo';
import { REMOVE_ALL_TODOS,UPDATE_NAME,STEP_1 ,STEP_2, STEP_3 } from '../actions';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @select() lastUpdate;
  @select() myName;
  @select() lastFlag;
  idVal: string;
  countryName: any;
  city:string;
  state:string;
  address:string;
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  postalCode: string;
  countryNames:any;
  constructor(private route: ActivatedRoute,private ngRedux: NgRedux<IAppState>, private CountryNamesService: CountryNamesService,
     private geoApiService: GeoApiService) {
     }
      
  reg: myName = {
    myName: 'not updated'
  };
  ngOnInit() {
    this.idVal = this.route.snapshot.paramMap.get('id');
    this.getCountryList();
  }
  onUpdate() {
    console.log('In Update')
    this.ngRedux.dispatch({type: UPDATE_NAME, name: 'gill'});
  }
  step1Trigger(): void {
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;    
    this.ngRedux.dispatch({type: STEP_1});
  }
  step2Trigger(): void {
    this.step2 = true;
    this.step1 = false;
    this.step3 = false;    
    this.ngRedux.dispatch({type: STEP_2});
  }
  step3Trigger(): void {
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;    
    this.ngRedux.dispatch({type: STEP_3});
  }
  submitForm(): void {

  }
  back2(): void {
    this.step2Trigger();
  }
  back1(): void {
    this.step1Trigger();
  }
  getCountryList(): void {
    console.log('inside get country method');
    this.CountryNamesService.getCountry().subscribe(data => this.countryName = data);    
    
    }
    fetchAdd():void  {
      this.fetchAddress(this.address);
    }
    fetchPostal():void  {
      this.fetchAddress(this.postalCode);
    }
    fetchAddress(add) : void {
      this.geoApiService.getAddress(add).subscribe(
        data => {
          console.log('data of postal address', data);

         this.countryNames = {'results':'abc'};
           this.countryNames =data;
         this.city = this.countryNames.results[0].address_components[1].long_name;
         this.state = this.countryNames.results[0].address_components[4].long_name;
        },
        (err) =>  console.log("Error Loging In:",err),
        () => { console.log("All Good With The Data")  }
      );
    }
  }
