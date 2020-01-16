import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCanbanBoard from './canban-board.reducer';

export const selectCanbanBoardState = createFeatureSelector<
  fromCanbanBoard.State
>(fromCanbanBoard.canbanBoardFeatureKey);
export const selectIsCanbanBoardLoading = createSelector(
  selectCanbanBoardState,
  state => state.isLoading
);
