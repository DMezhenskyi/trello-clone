import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromEntity from './root-state';

@NgModule({
  imports: [
    StoreModule.forFeature(fromEntity.entityFeatureKey, fromEntity.reducers)
  ]
})
export class EntityModule {}
