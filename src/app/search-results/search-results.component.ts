import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { FetchPhotosService } from '../fetch-photos.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnChanges {
@Input() searchItem1 :string;
picApi:any;
  constructor(private pics:FetchPhotosService) {
    
  this.picApi =[{'url':'abc'}];
   }
  ngOnInit() {
    console.log('searchItem:'+this.searchItem1);
  }
  ngOnChanges() {

    console.log('searchItem:'+this.searchItem1);
    this.pics.fetchPicsApi().subscribe(data=> 
      this.picApi =data,
    
    );
    console.log(this.picApi[0]);
  }

}
