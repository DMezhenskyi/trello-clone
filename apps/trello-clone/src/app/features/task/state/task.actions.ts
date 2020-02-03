import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Task } from './task.model';

export const addTask = createAction(
  '[Task/API] Add Task',
  props<{ task: Task }>()
);

export const updateTask = createAction(
  '[Task/API] Update Task',
  props<{ task: Update<Task> }>()
);

export const updateTasks = createAction(
  '[Task/API] Update Tasks',
  props<{ tasks: Update<Task>[] }>()
);
