import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router} from '@angular/router';
import {Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import {CommunicationService} from '../../communication.service';
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  username= '';
  psd1= '';
  psd2= '';
  alertMsg= '';
  // @Output() event = new EventEmitter();
  constructor(private router: Router, public http: Http, public ComService: CommunicationService) {
  }
  ngOnInit() {
  }
  setPsd1(event) {
    this.psd1 = event.target.value;
    this.alertMsg = '';
  }
  setPsd2(event) {
    this.alertMsg = '';
    this.psd2 = event.target.value;
  }
  setUsername(event) {
    this.username = event.target.value;
  }
  enroll() {
    if ( this.psd1 === this.psd2) {
      // this.ComService.putData({ 'username': 'testusername', 'userID': '1' });
      const password_md5 = Md5.hashStr( this.psd1 ).toString();
      const body = JSON.stringify({
        'username' : this.username,
        'password' : password_md5
      });
      this.http.post('api/enroll', body ).subscribe(data => {
        if ( data['state'].toString() === 'success') {
          alert(data['userID'].toString() + '用户注册成功');
          this.ComService.putData({ 'username': this.username, 'userid': data['userID']});
          this.router.navigate(['/host']);
        }else {
          alert('http成功，用户注册失败');
        }
      }, error => {
        alert('http失败');
      });
    } else {
      this.alertMsg = '您输入的两次密码不一致';
    }
  }

}
