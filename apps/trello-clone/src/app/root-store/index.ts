import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTaskList from './entities/task-list/task-list.reducer';
import * as fromTasks from './entities/tasks/tasks.reducer';

export interface AppState {
  [fromTaskList.taskListsFeatureKey]: fromTaskList.State;
  [fromTasks.tasksFeatureKey]: fromTasks.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromTaskList.taskListsFeatureKey]: fromTaskList.reducer,
  [fromTasks.tasksFeatureKey]: fromTasks.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
