import { createSelector } from '@ngrx/store';
import { selectEntityState } from '../root-state/entity.selectors';
import { adapter } from './task-list.reducer';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectTaskLists = createSelector(
  selectEntityState,
  selectAll
);
