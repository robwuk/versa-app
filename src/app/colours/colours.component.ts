import { Component, OnInit } from '@angular/core';
import { Colours } from './colours';
import { COLOURS } from './swatches';

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.scss']
})
export class ColoursComponent implements OnInit {
  imageSrc: string;
  colours = COLOURS;
  constructor() {
    this.imageSrc = this.colours[0].imgURL;
  }

  ngOnInit() {
  }

  onClick(imageNameObject) {
     this.imageSrc = imageNameObject.imgURL;
   }
}
