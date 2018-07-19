import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { WaterPriceTableComponent } from './water-price-table/water-price-table.component';
import { FormCardxTableComponent } from './form-cardx-table/form-cardx-table.component';
import { CountingOfficesComponent } from './counting-offices/counting-offices.component';
import { WaterOfficesTableComponent } from './water-offices-table/water-offices-table.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableComponent,
  },
  {
    path: 'water-price-table',
    component: WaterPriceTableComponent,
  },
  {
    path: 'form-cardx-table',
    component: FormCardxTableComponent,
  },
  {
    path: 'counting-office',
    component: CountingOfficesComponent,
  },
  {
    path: 'water-offices',
    component: WaterOfficesTableComponent,
  },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  WaterPriceTableComponent,
  FormCardxTableComponent,
  CountingOfficesComponent,
  WaterOfficesTableComponent,
];
