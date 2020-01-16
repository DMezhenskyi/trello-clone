import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCanbanBoard from './canban-board.reducer';

export const selectCanbanBoardState = createFeatureSelector<fromCanbanBoard.State>(
  fromCanbanBoard.canbanBoardFeatureKey
);
export const selectIsCanbanBoardLoaded = createSelector(
  selectCanbanBoardState,
  state => state.isLoaded
)