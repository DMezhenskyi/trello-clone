import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SharedModule } from '../../shared/shared.module';
import { TaskModule } from '../task/task.module';
import * as fromEntity from './state';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    SharedModule,
    TaskModule,
    StoreModule.forFeature(fromEntity.taskListsFeatureKey, fromEntity.reducer)
  ],
  exports: [TaskListComponent]
})
export class TaskListModule {}
