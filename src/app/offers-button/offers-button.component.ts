import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offers-button',
  templateUrl: './offers-button.component.html',
  styleUrls: ['./offers-button.component.scss']
})
export class OffersButtonComponent implements OnInit {
   @Input('text') buttonText: string;
   @Input('width') buttonWidth: string;
   @Input('height') buttonHeight: string;
   @Input('margintop') marginTop: string;
  constructor() { }

  ngOnInit() {
  }

}
