import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';


// import {NgxBarcodeModule} from './tracking-request/ngx-barcode-master/src/ngx-barcode.module'

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { TrackingRequest } from '../../@core/data/trackingRequest.service';
// import { FormQabzService } from '../../@core/data/form-qabz.service';
// import { FormQabzComponent } from './form-qabz/form-qabz.component';

const component= [
  // FormQabzComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    Ng2SmartTableModule,
    // NgxBarcodeModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  entryComponents: [
    // FormQabzComponent,
  ],
  providers: [
    TrackingRequest
    // FormQabzService,
  ]
})
export class FormsModule { }
