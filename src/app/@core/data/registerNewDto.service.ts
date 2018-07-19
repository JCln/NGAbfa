import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
  })
};
@Injectable()
export class registerNewDto {


  constructor(private http: HttpClient) { }

  getAdvantageData(registerNewDto: Object) {
    console.log(registerNewDto);
    const apiUrl = 'http://172.18.12.14:100/MoshtarakinApi/RequestManager/RegisterNew';
    return this.http.put(apiUrl, registerNewDto, httpOptions);
  }
}

