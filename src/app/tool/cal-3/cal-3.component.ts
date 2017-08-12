import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal-3',
  templateUrl: './cal-3.component.html',
  styleUrls: ['./cal-3.component.css']
})
export class Cal3Component implements OnInit {
  public result1: number ;
  public result2: number ;
  public val1: number ;
  public val2: number ;
  public val3: number ;
  constructor() { }

  ngOnInit() {
    this.result1 = 0;
    this.result2 = 0;
  }
  cal1(val: number ) {
    this.val1 = val;
    this.result1 = 0;
    this.result2 = 0;
  }
  cal2(val: number ) {
    this.val2 = val;
    this.result1 = 0;
    this.result2 = 0;
  }
  cal3(val: number ) {
    this.val3 = val;
    this.result1 = 0;
    this.result2 = 0;
  }
  cal() {
    this.result1 = (this.val2 - this.val1) / 365;
    this.result2 = (this.val2 - this.val1) / this.val3 ;
  }
}
