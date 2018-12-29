import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billboard-main',
  templateUrl: './billboard-main.component.html',
  styleUrls: ['./billboard-main.component.scss']
})
export class BillboardMainComponent implements OnInit {
  text = "Make An Enquiry";
  width = "22vw";
  height = "8vh";
  constructor() { }

  ngOnInit() {
  }

}
