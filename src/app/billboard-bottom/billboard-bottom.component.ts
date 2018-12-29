import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billboard-bottom',
  templateUrl: './billboard-bottom.component.html',
  styleUrls: ['./billboard-bottom.component.scss']
})
export class BillboardBottomComponent implements OnInit {
  text = "More Information";
  width = "22vw";
  height = "8vh";

  constructor() { }

  ngOnInit() {
  }

}
