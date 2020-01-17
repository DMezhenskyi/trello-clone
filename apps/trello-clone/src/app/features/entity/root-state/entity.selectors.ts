import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEntity from '.';

export const selectEntityFeatureState = createFeatureSelector<fromEntity.State>(
  fromEntity.entityFeatureKey
);
export const selectEntityState = createSelector(
  selectEntityFeatureState,
  state => state.taskLists
);
