import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CommunicationService {
  // 用来产生数据流的数据源
  private dataSource = new Subject();
  // 把数据流转换成 Observable
  data$ = this.dataSource.asObservable();

  putData(data) {
    // 把数据输入到数据流
    this.dataSource.next(data);
  }
}
