import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  tele= '';
  psd1= '';
  psd2= '';
  alertMsg= '';
  constructor(private router: Router ) { }

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
  setTele(event) {
    this.tele = event.target.value;
  }
  enroll() {
    if ( this.psd1 === this.psd2) {
      this.router.navigate(['/host']);
      alert('注册成功（暂未引入问卷页面）');
    } else {
      this.alertMsg = '您输入的两次密码不一致';
    }
  }

}
