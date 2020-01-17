import { ActionReducerMap } from '@ngrx/store';
import * as fromTaskList from '../task-list/task-list.reducer';

export const entityFeatureKey = 'entity';

export interface State {
  [fromTaskList.taskListsFeatureKey]: fromTaskList.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromTaskList.taskListsFeatureKey]: fromTaskList.reducer
};
