import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';
import { WaterPriceTableService } from './water-price-table.service';
import { CardXTableService } from './cardx-table.service';
import { PlayerService } from './player.service';
import { CountingOfficesService } from './counting-offices.service';
import { WaterOfficesService } from './water-offices-table.service';
import { getdictionary } from './get-dictionary.service';
import { registerNewDto } from './registerNewDto.service';
import { FormQabzService } from './form-qabz.service';
import { MemberInfoService } from './form-memberInfo.service';
import { TrackingRequest } from './trackingRequest.service';

const SERVICES = [
  UserService,
  ElectricityService,
  StateService,
  SmartTableService,
  WaterPriceTableService,
  MemberInfoService,
  getdictionary,
  registerNewDto,
  TrackingRequest,
  FormQabzService,
  CardXTableService,
  CountingOfficesService,
  WaterOfficesService,
  PlayerService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
