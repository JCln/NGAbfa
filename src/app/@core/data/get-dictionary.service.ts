import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class getdictionary {

  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Credentials': 'true',
  //     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
  //   })
  // };
  // headers.append('Content-Type','application/json');

  // headers: {
  //     "Access-Control-Allow-Credentials":true,
  //     "Access-Control-Allow-Origin": "http://172.18.12.14:100/MoshtarakinApi/RequestManager/RegisterAS",
  //     "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  //     "Access-Control-Allow-Headers":"Content-Type"
  //   }

  constructor(private http: HttpClient) { }

  getAdvantageData(RegisterAS: Object) {
    console.log(RegisterAS);
    const apiUrl = 'http://172.18.12.14:100/MoshtarakinApi/RequestManager/RegisterAS';
    return this.http.put(apiUrl, RegisterAS);
  }
}

