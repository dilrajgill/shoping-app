import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }
  showResults : boolean = false;
  searchItem:string = '';
  ngOnInit() {
  }
  search():void {
    if(this.searchItem.length>3)
    {
    this.showResults = true;
  }
else{
  this.showResults = false;
}}

}
