import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
// import { FormInputsComponent } from './form-inputs/form-inputs.component';
// import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
// import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormQabzComponent } from './form-qabz/form-qabz.component';
import { FormWaterPriceComponent } from './form-water-price/form-water-price.component';
import { FormInfoComponent } from './form-info/form-info.component';
import { LinkServiceComponent } from './link-service/link-service.component';
import { TrackingRequestComponent } from './tracking-request/tracking-request.component';
import { FormMemberInfoComponent } from './form-member-info/form-member-info.component';
import { RegisterNewComponent } from './register-new/register-new.component';

const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [
  //   {
  //   path: 'inputs',
  //   component: FormInputsComponent,
  // }, {
  //   path: 'layouts',
  //   component: FormLayoutsComponent,
  // }, {
  //   path: 'checkbox',
  //   component: FormCheckboxComponent,
  // },
  {
    path: 'memberInfo',
    component: FormMemberInfoComponent,
  },
  {
    path: 'qabz',
    component: FormQabzComponent,
  },
  {
    path: 'water-price',
    component: FormWaterPriceComponent,
  },
  {
    path: 'info',
    component: FormInfoComponent,
  },
  {
    path: 'trackrequest',
    component: TrackingRequestComponent,
  },
  {
    path: 'LinkService',
    component: LinkServiceComponent,
  },
  {
    path: 'registerNew',
    component: RegisterNewComponent,
  },
],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
  FormsComponent,
  // FormInputsComponent,
  // FormLayoutsComponent,
  // FormCheckboxComponent,
  FormMemberInfoComponent,
  FormQabzComponent,
  FormWaterPriceComponent,
  FormInfoComponent,
  TrackingRequestComponent,
  LinkServiceComponent,
  RegisterNewComponent
];
