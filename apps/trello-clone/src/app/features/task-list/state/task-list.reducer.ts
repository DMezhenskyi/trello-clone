import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { TaskList } from './task-list.model';
import * as TaskListActions from './task-list.actions';

export const taskListsFeatureKey = 'taskLists';

export interface State extends EntityState<TaskList> {}

export const adapter: EntityAdapter<TaskList> = createEntityAdapter<TaskList>({
  sortComparer: (task, compareTask) => (task.order > compareTask.order ? 1 : -1)
});

export const initialState: State = adapter.getInitialState();

const taskListReducer = createReducer(
  initialState,
  on(TaskListActions.addTaskLists, (state, action) =>
    adapter.addMany(action.taskLists, state)
  ),
  on(TaskListActions.updateTaskLists, (state, action) =>
    adapter.updateMany(action.taskLists, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return taskListReducer(state, action);
}
