import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Task } from './task.model';
import * as TaskActions from './task.actions';

export const tasksFeatureKey = 'tasks';

export interface State extends EntityState<Task> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, action) =>
    adapter.addOne(action.task, state)
  ),
  on(TaskActions.upsertTask, (state, action) =>
    adapter.upsertOne(action.task, state)
  ),
  on(TaskActions.addTasks, (state, action) =>
    adapter.addMany(action.tasks, state)
  ),
  on(TaskActions.upsertTasks, (state, action) =>
    adapter.upsertMany(action.tasks, state)
  ),
  on(TaskActions.updateTask, (state, action) =>
    adapter.updateOne(action.task, state)
  ),
  on(TaskActions.updateTasks, (state, action) =>
    adapter.updateMany(action.tasks, state)
  ),
  on(TaskActions.deleteTask, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(TaskActions.deleteTasks, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(TaskActions.loadTasks, (state, action) =>
    adapter.addAll(action.tasks, state)
  ),
  on(TaskActions.clearTasks, state => adapter.removeAll(state))
);

export function reducer(state: State | undefined, action: Action) {
  return taskReducer(state, action);
}
