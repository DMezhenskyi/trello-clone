import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { reducers, metaReducers } from './';
import * as fromTaskList from './entities/task-list/task-list.reducer';
import * as fromTasks from './entities/tasks/tasks.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(
      fromTaskList.taskListsFeatureKey,
      fromTaskList.reducer
    ),
    StoreModule.forFeature(fromTasks.tasksFeatureKey, fromTasks.reducer)
  ]
})
export class RootStoreModule {}
