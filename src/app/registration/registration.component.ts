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
  countryName:any;
  constructor(private route : ActivatedRoute, private CountryNamesService: CountryNamesService) { }

  ngOnInit() {
   this.idVal = this.route.snapshot.paramMap.get('id');
   this.getCountryList();
  }
  getCountryList() :void {
    this.CountryNamesService.getCountry().subscribe(data => this.countryName = data);
    console.log('this.countryName : '+this.countryName.length);
  }
}
