import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Task } from './task.model';

export const loadTasks = createAction(
  '[Task/API] Load Tasks', 
  props<{ tasks: Task[] }>()
);

export const addTask = createAction(
  '[Task/API] Add Task',
  props<{ task: Task }>()
);

export const upsertTask = createAction(
  '[Task/API] Upsert Task',
  props<{ task: Task }>()
);

export const addTasks = createAction(
  '[Task/API] Add Tasks',
  props<{ tasks: Task[] }>()
);

export const upsertTasks = createAction(
  '[Task/API] Upsert Tasks',
  props<{ tasks: Task[] }>()
);

export const updateTask = createAction(
  '[Task/API] Update Task',
  props<{ task: Update<Task> }>()
);

export const updateTasks = createAction(
  '[Task/API] Update Tasks',
  props<{ tasks: Update<Task>[] }>()
);

export const deleteTask = createAction(
  '[Task/API] Delete Task',
  props<{ id: string }>()
);

export const deleteTasks = createAction(
  '[Task/API] Delete Tasks',
  props<{ ids: string[] }>()
);

export const clearTasks = createAction(
  '[Task/API] Clear Tasks'
);
