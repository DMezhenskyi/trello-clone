import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, MinimalRouterStateSerializer, RouterState } from '@ngrx/router-store';

import { reducers, metaReducers } from './reducers';
import { environment } from '../../environments/environment';

@NgModule( {
  declarations: [],
  imports: [
    CommonModule,
    metaReducers,
    StoreModule.forRoot( reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    } ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot( [] ),
    StoreRouterConnectingModule.forRoot( { routerState: RouterState.Minimal } )
  ]
} )
export class RootStoreModule { }
