import { createSelector, createFeatureSelector, props } from '@ngrx/store';
import { tasksFeatureKey, adapter } from './task.reducer';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

const selectFeatureState = createFeatureSelector(tasksFeatureKey);

export const selectTasks = createSelector(
  selectFeatureState,
  selectAll
);

export const selectTasksForTaskList = createSelector(
  selectTasks,
  (tasks, props) => tasks.filter(task => task.id === props.id)
);
