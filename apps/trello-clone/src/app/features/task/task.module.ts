import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import * as fromTaskState from './state';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    StoreModule.forFeature(
      fromTaskState.tasksFeatureKey,
      fromTaskState.reducer
    ),
    MatCardModule,
    MatButtonModule
  ],
  exports: [TaskComponent]
})
export class TaskModule {}
