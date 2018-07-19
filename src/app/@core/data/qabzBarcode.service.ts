
import { Injectable, NgModule } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
///


const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'}),
}

@NgModule({
  imports: [ HttpClientModule ],
})

@Injectable()
export class QabzBarcode {
  protected data: Array<any>;
  // getElements(): Promise<any>;
  //   getFilteredAndSorted(): Promise<any>;
  //   get(): Promise<any>;

  constructor(private http: HttpClient) { }

  getAdvantageData() {
    const apiUrl = 'http://81.90.148.25/Auth/account/login';
    this.http.post(apiUrl , {username: 'sysAdmin' , password: 123456} , httpOptions)
    .subscribe(res => res + 'this is resQabzBarcode');


    // const apiUrl = './assets/data/api/advantage.json';
    // return this.http.get(apiUrl)
    //   .map((response: Response) => {
    //     const data = response.json();
    //     return data;
    //   });
  }
}

