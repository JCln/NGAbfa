import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { WaterPriceTableService } from '../../@core/data/water-price-table.service';
import { CardXTableService } from '../../@core/data/cardx-table.service';
import { CountingOfficesService } from '../../@core/data/counting-offices.service';
import { WaterOfficesService } from '../../@core/data/water-offices-table.service';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
    WaterPriceTableService,
    CardXTableService,
    CountingOfficesService,
    WaterOfficesService,
  ],
})
export class TablesModule { }
