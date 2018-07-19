import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WaterPriceTableService {

  constructor(private http: HttpClient) { }

  getAdvantageData() {
    const apiUrl = 'http://172.18.12.14:100/MoshtarakinApi/Installment/Get/10018315';
    return this.http.get(apiUrl)
  }
}
