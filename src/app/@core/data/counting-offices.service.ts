import { Injectable } from '@angular/core';

@Injectable()
export class CountingOfficesService {

  data= [
  ];

  getData() {
    return this.data;
  }
}
