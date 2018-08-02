import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


export class location {
  city: string ;
  country: string ;
} 
@Injectable({
  providedIn: 'root'
})
export class GeoApiService {
  goeoUrl: string;  
  constructor(private http:HttpClient) { }
    getAddress (postal: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+postal)
    
  }
}