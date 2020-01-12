import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Tasks } from './tasks.model';

export enum TasksActionTypes {
  LoadTaskss = '[Tasks] Load Taskss',
  AddTasks = '[Tasks] Add Tasks',
  UpsertTasks = '[Tasks] Upsert Tasks',
  AddTaskss = '[Tasks] Add Taskss',
  UpsertTaskss = '[Tasks] Upsert Taskss',
  UpdateTasks = '[Tasks] Update Tasks',
  UpdateTaskss = '[Tasks] Update Taskss',
  DeleteTasks = '[Tasks] Delete Tasks',
  DeleteTaskss = '[Tasks] Delete Taskss',
  ClearTaskss = '[Tasks] Clear Taskss'
}

export class LoadTaskss implements Action {
  readonly type = TasksActionTypes.LoadTaskss;

  constructor(public payload: { taskss: Tasks[] }) {}
}

export class AddTasks implements Action {
  readonly type = TasksActionTypes.AddTasks;

  constructor(public payload: { tasks: Tasks }) {}
}

export class UpsertTasks implements Action {
  readonly type = TasksActionTypes.UpsertTasks;

  constructor(public payload: { tasks: Tasks }) {}
}

export class AddTaskss implements Action {
  readonly type = TasksActionTypes.AddTaskss;

  constructor(public payload: { taskss: Tasks[] }) {}
}

export class UpsertTaskss implements Action {
  readonly type = TasksActionTypes.UpsertTaskss;

  constructor(public payload: { taskss: Tasks[] }) {}
}

export class UpdateTasks implements Action {
  readonly type = TasksActionTypes.UpdateTasks;

  constructor(public payload: { tasks: Update<Tasks> }) {}
}

export class UpdateTaskss implements Action {
  readonly type = TasksActionTypes.UpdateTaskss;

  constructor(public payload: { taskss: Update<Tasks>[] }) {}
}

export class DeleteTasks implements Action {
  readonly type = TasksActionTypes.DeleteTasks;

  constructor(public payload: { id: string }) {}
}

export class DeleteTaskss implements Action {
  readonly type = TasksActionTypes.DeleteTaskss;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearTaskss implements Action {
  readonly type = TasksActionTypes.ClearTaskss;
}

export type TasksActions =
 LoadTaskss
 | AddTasks
 | UpsertTasks
 | AddTaskss
 | UpsertTaskss
 | UpdateTasks
 | UpdateTaskss
 | DeleteTasks
 | DeleteTaskss
 | ClearTaskss;
