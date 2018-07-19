import { Component } from '@angular/core';
import { TrackingRequest } from '../../../@core/data/trackingRequest.service';

@Component({
  selector: 'ngx-tracking-request',
  templateUrl: './tracking-request.component.html',
  styleUrls: ['./tracking-request.component.scss', './tracking-request.css'],
})

export class TrackingRequestComponent {

  trackingRequest: string = '';
  allowTable: boolean = true;
  trackingData: object[];

  constructor(private service: TrackingRequest) { }

  putData(trackingRequest) {
    this.service.getAdvantageData(trackingRequest).subscribe((trackingData: object[]) => {
      this.trackingData = trackingData;
      this.allowTable = true;
    });
  }

}
