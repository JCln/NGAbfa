/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { AuthGuardService } from './auth-guard.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbAuthModule, NbEmailPassAuthProvider, NB_AUTH_TOKEN_CLASS, NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { of as observableOf } from 'rxjs/observable/of';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { RoleProvider } from './role.provider';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
          view: ['news', 'comments'],
        },
        user: {
          parent: 'guest',
          create: 'comments',
        },
        moderator: {
          parent: 'user',
          create: 'news',
          remove: '*',
        }

      },

    }),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: '/api',
            data: {
              token: {
                key: 'token', // this parameter tells nebular where to look for token
              },
            },
          },
        },
      },
      forms: {},
    },
    ),
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuardService,
    {
      provide: NbRoleProvider,
      useValue: {
        getRole() {
          return observableOf('guest');
        },
      },
    },
    { provide: NbRoleProvider, useClass: RoleProvider }, // provide the class
    { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },
    // { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
