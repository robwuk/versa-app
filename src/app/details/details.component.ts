import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  text = "View Our Versa Connect Offers";
  width = "20vw";
  height = "6vh";
  margintop = "2vh";

  constructor(private router: Router) { }

  ngOnInit() {
     this.router.navigate(['/dimensions']);
  }

}
