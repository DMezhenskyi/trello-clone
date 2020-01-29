import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import * as fromTaskState from './state';
import { TaskComponent } from './components/task/task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TaskComponent, CreateTaskComponent],
  imports: [
    StoreModule.forFeature(
      fromTaskState.tasksFeatureKey,
      fromTaskState.reducer
    ),
    SharedModule,
    MatCardModule
  ],
  exports: [TaskComponent, CreateTaskComponent]
})
export class TaskModule {}
