import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MemberInfoService {

 constructor(private http: HttpClient) { }

  getAdvantageData() {
    const apiUrl = 'http://172.18.12.14:100/MoshtarakinApi/Member/GetInfo/10018315';
      return this.http.get(apiUrl)
  }
}
// const apiUrl = 'http://echo.jsontest.com/key/value/otherkey/othervalue';

