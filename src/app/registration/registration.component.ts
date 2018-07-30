import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeoApiService } from '../geo-api.service';
import { CountryNamesService } from '../country-names.service';
import { myName } from '../todo';
import { REMOVE_ALL_TODOS, UPDATE_NAME, STEP_1, STEP_2, STEP_3 } from '../actions';
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
  city: string;
  state: string;
  address: string;
  country: string;
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  postalCode: string;
  countryNames: any;
  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>, private CountryNamesService: CountryNamesService,
    private geoApiService: GeoApiService) {
  }
  ngOnInit() {
    this.idVal = this.route.snapshot.paramMap.get('id');
    this.getCountryList();

  }
  step1Trigger(): void {
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
    this.ngRedux.dispatch({ type: STEP_1 });
  }
  step2Trigger(): void {
    this.step2 = true;
    this.step1 = false;
    this.step3 = false;
    this.ngRedux.dispatch({ type: STEP_2 });
    console.log('Redux get state step1' + this.ngRedux.getState().step1);
    console.log('country' + this.country);
  }

  step3Trigger(): void {
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
    this.ngRedux.dispatch({ type: STEP_3 });
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
    this.CountryNamesService.getCountry().subscribe(data => this.countryName = data);
  }
  fetchAdd(): void {
    this.fetchAddress(this.address, 'address');
  }
  fetchPostal(): void {
    this.fetchAddress(this.postalCode, 'postal');
  }
  populateData(data, from): void {
    this.countryNames = { 'results': 'abc' };
    this.countryNames = data;
    if (this.countryNames.status === 'OK') {
      if (from === 'postal') {
        if (this.countryNames.results[0].address_components[1]) {
          this.city = this.countryNames.results[0].address_components[1].long_name;
        }
        if (this.countryNames.results[0].address_components[4]) {
          this.state = this.countryNames.results[0].address_components[4].long_name;
        }
        if (this.countryNames.results[0].address_components[5]) {
          this.country = this.countryNames.results[0].address_components[5].short_name;
        }
      } else if (from === 'address') {
        if (this.countryNames.results[0].address_components[2]) {
          this.city = this.countryNames.results[0].address_components[2].long_name;
        }
        if (this.countryNames.results[0].address_components[5]) {
          this.state = this.countryNames.results[0].address_components[5].long_name;
        }
        if (this.countryNames.results[0].address_components[6]) {
          this.country = this.countryNames.results[0].address_components[6].short_name;
        }
      }
    }
  }
  fetchAddress(add, from): void {
    this.geoApiService.getAddress(add).subscribe(
      data => {
        this.populateData(data, from);
      },
      (err) => console.log("Error Loging In:", err),
      () => { console.log("All Good With The Data") }
    );
  }
  form1Submit() :void {
    console.log('In Form 1');
  }
  onUpdate() {
    console.log('In Update')
    this.ngRedux.dispatch({type: UPDATE_NAME, name: 'gill'});

  }
}
