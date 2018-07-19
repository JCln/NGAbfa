import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

@Component({
  selector: 'ngx-water-zone',
  templateUrl: './water-zone.component.html',
  styleUrls: ['./water-zone.component.scss'],
})
export class WaterZoneComponent {
  mapTitle= 'شرکت آبفا منطقه';
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 9,
    center: L.latLng({ lat: 32.636599, lng: 51.65332 }),
  };
}
