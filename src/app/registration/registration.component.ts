import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryNamesService } from '../country-names.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  idVal: string;
  countryName: any;
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  constructor(private route: ActivatedRoute, private CountryNamesService: CountryNamesService) { }
  
  ngOnInit() {
    this.idVal = this.route.snapshot.paramMap.get('id');
    this.getCountryList();
  }
  step1Trigger(): void {
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
  }
  step2Trigger(): void {
    this.step2 = true;
    this.step1 = false;
    this.step3 = false;
  }
  step3Trigger(): void {
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
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
}
