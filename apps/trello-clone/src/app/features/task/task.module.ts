import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromTaskState from './state';
import { TaskComponent } from './components/task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    StoreModule.forFeature(fromTaskState.tasksFeatureKey, fromTaskState.reducer)
  ],
  exports: [TaskComponent]
})
export class TaskModule {}
