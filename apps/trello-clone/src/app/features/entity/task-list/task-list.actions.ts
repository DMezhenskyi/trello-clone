import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { TaskList } from './task-list.model';

export const loadTaskLists = createAction(
  '[TaskList/API] Load TaskLists',
  props<{ taskLists: TaskList[] }>()
);

export const addTaskList = createAction(
  '[TaskList/API] Add TaskList',
  props<{ taskList: TaskList }>()
);

export const upsertTaskList = createAction(
  '[TaskList/API] Upsert TaskList',
  props<{ taskList: TaskList }>()
);

export const addTaskLists = createAction(
  '[TaskList/API] Add TaskLists',
  props<{ taskLists: TaskList[] }>()
);

export const upsertTaskLists = createAction(
  '[TaskList/API] Upsert TaskLists',
  props<{ taskLists: TaskList[] }>()
);

export const updateTaskList = createAction(
  '[TaskList/API] Update TaskList',
  props<{ taskList: Update<TaskList> }>()
);

export const updateTaskLists = createAction(
  '[TaskList/API] Update TaskLists',
  props<{ taskLists: Update<TaskList>[] }>()
);

export const deleteTaskList = createAction(
  '[TaskList/API] Delete TaskList',
  props<{ id: string }>()
);

export const deleteTaskLists = createAction(
  '[TaskList/API] Delete TaskLists',
  props<{ ids: string[] }>()
);

export const clearTaskLists = createAction('[TaskList/API] Clear TaskLists');
