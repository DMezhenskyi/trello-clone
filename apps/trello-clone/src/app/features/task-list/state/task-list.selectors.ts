import { createSelector, createFeatureSelector } from '@ngrx/store';
import { taskListsFeatureKey, adapter } from './task-list.reducer';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

const selectEntityState = createFeatureSelector(taskListsFeatureKey);

export const selectTaskLists = createSelector(
  selectEntityState,
  selectAll
);
