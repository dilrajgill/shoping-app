import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor() { }

  validEmailId():Observable<dataType[]> {
    return of(emailId);
  }
}
const emailId =[{email:'gilldilraj@yahoo.com',password:'admin' }];
export class dataType{
  email:string;
  password:string;
}
