import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import * as fromTaskState from './state';
import { TaskComponent } from './components/task/task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { SharedModule } from '../../shared/shared.module';
import { InputErrorStateMatcher } from './form/input-error-state.matcher';

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
  exports: [TaskComponent, CreateTaskComponent],
  providers: [{ provide: ErrorStateMatcher, useClass: InputErrorStateMatcher }]
})
export class TaskModule {}
