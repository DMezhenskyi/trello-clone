import { createAction, props } from '@ngrx/store';

export const loadCanbanBoards = createAction('[CanbanBoard] Load CanbanBoards');

export const loadCanbanBoardsSuccess = createAction(
  '[CanbanBoard] Load CanbanBoards Success',
  props<{ data: string[] }>()
);

export const loadCanbanBoardsFailure = createAction(
  '[CanbanBoard] Load CanbanBoards Failure',
  props<{ error: Error }>()
);
