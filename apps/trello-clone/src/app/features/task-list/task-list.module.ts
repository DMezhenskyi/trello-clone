import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SharedModule } from '../../shared/shared.module';
import { TaskModule } from '../task/task.module';
import * as fromEntity from './state';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    SharedModule,
    TaskModule,
    StoreModule.forFeature(fromEntity.taskListsFeatureKey, fromEntity.reducer),
    DragDropModule
  ],
  exports: [TaskListComponent]
})
export class TaskListModule {}
