import {Component, OnInit} from '@angular/core';
declare var $: any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor( private router: Router ) { }
  ngOnInit() {
    $('li.dropdown').mouseover(function () {
      $(this).addClass('open');
    }).mouseout(function () {
      $(this).removeClass('open');
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 200) {
        $('nav.navbar-fixed-top').removeClass('opacity8');
      } else {
        $('nav.navbar-fixed-top').addClass('opacity8');
      }
    });
  }
  login() {
    this.router.navigate(['/host'] ) ;
  }
}


