import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fof',
  templateUrl: './fof.component.html',
  styleUrls: ['./fof.component.css']
})
export class FofComponent implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit() {
  }
  toDetails1(infoID) {
    this.router.navigate(['/information/details', { id: infoID}]);
  }
}
