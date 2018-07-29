import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  pageTitle: string;
  description: string;
  /*questions = [
    {question: 'How does membership work?', answer: 'AF'},
    {question: 'How do I join the Shopping Club?', answer: 'AF'}
 ]*/

  questions = [
    {
      div: 'Membership & Account Information',
      divQues: [
        { question: 'How do I join the Shopping Club?', answer: 'AF' },
        { question: 'How does membership work?', answer: 'AF' }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
    this.fetchTextValues();
  }


  fetchTextValues(): void {
    this.pageTitle = 'Frequently Asked Questions';
    this.description = 'This page answers the most frequently asked questions';
  }

}
