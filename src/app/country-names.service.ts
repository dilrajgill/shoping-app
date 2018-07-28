import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { country } from './county';
import { countryNames } from './countryNames-mock';

@Injectable({
  providedIn: 'root'
})
export class CountryNamesService {
  constructor() { }
   getCountry(): Observable<country[]> {
    return of(countryNames);
  }
}
