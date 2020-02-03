import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Task } from './task.model';
import * as TaskActions from './task.actions';

export const tasksFeatureKey = 'tasks';

export interface State extends EntityState<Task> {}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  sortComparer: (task, compareTask) => (task.order > compareTask.order ? 1 : -1)
});

export const initialState: State = adapter.getInitialState();

const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, action) =>
    adapter.addOne(action.task, state)
  ),
  on(TaskActions.updateTask, (state, action) =>
    adapter.updateOne(action.task, state)
  ),
  on(TaskActions.updateTasks, (state, action) =>
    adapter.updateMany(action.tasks, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return taskReducer(state, action);
}
