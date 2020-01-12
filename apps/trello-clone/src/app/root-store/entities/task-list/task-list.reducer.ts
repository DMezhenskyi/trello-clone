import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TaskList } from './task-list.model';
import * as TaskListActions from './task-list.actions';

export const taskListsFeatureKey = 'taskLists';

export interface State extends EntityState<TaskList> {
  // additional entities state properties
}

export const adapter: EntityAdapter<TaskList> = createEntityAdapter<TaskList>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const taskListReducer = createReducer(
  initialState,
  on(TaskListActions.addTaskList,
    (state, action) => adapter.addOne(action.taskList, state)
  ),
  on(TaskListActions.upsertTaskList,
    (state, action) => adapter.upsertOne(action.taskList, state)
  ),
  on(TaskListActions.addTaskLists,
    (state, action) => adapter.addMany(action.taskLists, state)
  ),
  on(TaskListActions.upsertTaskLists,
    (state, action) => adapter.upsertMany(action.taskLists, state)
  ),
  on(TaskListActions.updateTaskList,
    (state, action) => adapter.updateOne(action.taskList, state)
  ),
  on(TaskListActions.updateTaskLists,
    (state, action) => adapter.updateMany(action.taskLists, state)
  ),
  on(TaskListActions.deleteTaskList,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TaskListActions.deleteTaskLists,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TaskListActions.loadTaskLists,
    (state, action) => adapter.addAll(action.taskLists, state)
  ),
  on(TaskListActions.clearTaskLists,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return taskListReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
