import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versa-text',
  templateUrl: './versa-text.component.html',
  styleUrls: ['./versa-text.component.scss']
})
export class VersaTextComponent implements OnInit {
  text = "View Our Versa Connect Offers";
  width = "20vw";
  height = "6vh";
  margintop = "2vh";
  
  constructor() { }

  ngOnInit() {
  }

}
