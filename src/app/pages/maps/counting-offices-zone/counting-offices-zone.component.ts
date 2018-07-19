import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

@Component({
  selector: 'ngx-counting-offices-zone',
  templateUrl: '../water-zone/water-zone.component.html',
  styleUrls: [ '../water-zone/water-zone.component.scss'],
})
export class CountingOfficesZoneComponent {
  mapTitle= 'دفاتر پیشخوان منطقه';
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 9,
    center: L.latLng({ lat: 32.636599, lng: 51.65332 }),
  };
}
