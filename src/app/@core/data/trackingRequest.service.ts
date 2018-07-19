import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrackingRequest {
  constructor(private httpClient: HttpClient) { }

  getAdvantageData(trackingRequest: string) {
    const apiUrl = 'http://172.18.12.14:100/MoshtarakinApi/Requestmanager/gettrackings/trackingRequest';
    return this.httpClient.get(apiUrl);
  }
}

