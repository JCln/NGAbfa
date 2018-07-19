import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardXTableService {

  constructor(private http: HttpClient) { }

  getAdvantageData() {
    const apiUrl = 'http://172.18.12.14:100/MoshtarakinApi/Bill/GetKardex/10018315';
    return this.http.get(apiUrl)
  }
}
// const apiUrl = 'http://echo.jsontest.com/key/value/otherkey/othervalue';

