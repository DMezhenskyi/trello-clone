import { Action, createReducer, on } from '@ngrx/store';
import * as CanbanBoardActions from './canban-board.actions';

export const canbanBoardFeatureKey = 'canbanBoard';

export interface State {
  isLoading: boolean;
  error: Error | null;
  taskListIds: string[];
}

export const initialState: State = {
  isLoading: false,
  error: null,
  taskListIds: []
};

const canbanBoardReducer = createReducer(
  initialState,

  on(CanbanBoardActions.loadCanbanBoards, state => ({
    ...state,
    isLoading: true
  })),
  on(CanbanBoardActions.loadCanbanBoardsSuccess, (state, { data }) => ({
    ...state,
    taskListIds: data,
    isLoading: false
  })),
  on(CanbanBoardActions.loadCanbanBoardsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return canbanBoardReducer(state, action);
}
