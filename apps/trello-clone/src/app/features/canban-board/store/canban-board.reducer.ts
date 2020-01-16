import { Action, createReducer, on } from '@ngrx/store';
import * as CanbanBoardActions from './canban-board.actions';

export const canbanBoardFeatureKey = 'canbanBoard';

export interface State {
  isLoaded: boolean;
}

export const initialState: State = {
  isLoaded: false
};

const canbanBoardReducer = createReducer(
  initialState,

  on(CanbanBoardActions.loadCanbanBoards, state => ({ ...state, isLoaded: !state.isLoaded })),
  on(CanbanBoardActions.loadCanbanBoardsSuccess, (state, action) => state),
  on(CanbanBoardActions.loadCanbanBoardsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return canbanBoardReducer(state, action);
}
