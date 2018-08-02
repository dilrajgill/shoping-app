import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchPhotosService {

  constructor(private http:HttpClient) { }

  fetchPicsApi() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
