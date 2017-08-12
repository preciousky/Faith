import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#slideshow').on('slide.bs.carousel', function () {
    console.log('paly the picture! ');
  });
    $('#slideshow').on('slid.bs.carousel', function () {
      console.log('overpaly the picture! ');
    });
  }
}

