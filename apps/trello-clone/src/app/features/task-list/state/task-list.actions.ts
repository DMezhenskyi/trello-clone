import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { TaskList } from './task-list.model';

export const addTaskLists = createAction(
  '[TaskList/API] Add TaskLists',
  props<{ taskLists: TaskList[] }>()
);

export const updateTaskLists = createAction(
  '[TaskList/API] Update TaskLists',
  props<{ taskLists: Update<TaskList>[] }>()
);
