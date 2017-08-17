import {Component, OnInit} from '@angular/core';
declare var $: any;
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public username;
  public password;
  public userID;
  constructor( public router: Router , public http: Http) { }
  ngOnInit() {
    this.userID = -1;
    this.username = 'XXX';
    $('li.dropdown').mouseover(function () {
      $(this).addClass('open');
    }).mouseout(function () {
      $(this).removeClass('open');
    });
    // $(window).scroll(function () {
    //   if ($(window).scrollTop() >= 200) {
    //     $('nav.navbar-fixed-top').removeClass('opacity8');
    //   } else {
    //     $('nav.navbar-fixed-top').addClass('opacity8');
    //   }
    // });
    this.http.get('/').subscribe(data => {
      if ( data['userID'] ) {
        this.userID = data['userID'];
        this.username = data['username'];
      }
    });
  }

  login() {
    const password_md5 = Md5.hashStr( this.password ).toString().substr(2, 5)
                            + Md5.hashStr(this. password ).toString();
    const body = JSON.stringify({
      'username' : this.username,
      'password' : password_md5
    });
    this.http.post('app/mobile.json', body ).subscribe(data => {
      if (data['state'].toString() === 'success') {
        alert(data['userID'].toString() + '用户登陆成功');
        this.router.navigate(['/host']);
      }else {
        alert('用户登陆失败');
      }
    });
    // this.router.navigate(['/host', { id: userID}]);
  }

  logout() {
    this.userID = -1;
  }
  // getData(event) {
  //   this.username = event['username'];
  //   this.userID = event['userID'];
  // }
}


