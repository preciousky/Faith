import {Component, OnInit} from '@angular/core';
declare var $: any;
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import {Http} from '@angular/http';
import {CommunicationService} from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommunicationService]
})

export class AppComponent implements OnInit {
  public username;
  public password;
  public userID;
  ngOnInit() {
    this.userID = -1;
    this.username = 'XXX';
    $('li.dropdown').mouseover(function () {
      $(this).addClass('open');
    }).mouseout(function () {
      $(this).removeClass('open');
    });
    // this.http.get('/').subscribe(data => {
    //   if ( data['userID'] ) {
    //     this.userID = data['userID'];
    //     this.username = data['username'];
    //   }
    // });
  }
  constructor( public router: Router , public http: Http, public ComService: CommunicationService) {
    this.ComService.data$.subscribe(data => {
      this.username = data['username'];
      this.userID = data['user_id'];
    }, error => {
      console.log('error: ' + error);
    });
  }
  login() {
    console.log('login!');
    const password_md5 = Md5.hashStr( this.password ).toString();
    const body = JSON.stringify({
      'username' : this.username.toString(),
      'password' : password_md5
    });
    console.log('request:');
    console.log(body);
    this.http.post('http://123.207.20.107:3000/login', body ).subscribe(data => {
      console.log('response:');
      console.log(data);
      if (data['code'].toString() === '1') {
        alert(data['user']['user_id'].toString() + 'http成功，用户登陆成功');
        this.router.navigate(['/host']);
      }else {
        alert('http成功，用户登陆失败');
      }
    }, error => {
      alert('http失败');
    } );
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


