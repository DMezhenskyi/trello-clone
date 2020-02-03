import { createSelector, createFeatureSelector } from '@ngrx/store';
import { tasksFeatureKey, adapter, State } from './task.reducer';
import { Task } from './task.model';

export const { selectAll } = adapter.getSelectors();

const selectFeatureState = createFeatureSelector<State>(tasksFeatureKey);

export const selectTasks = createSelector(
  selectFeatureState,
  selectAll
);

export const selectTasksForTaskList = createSelector(
  selectTasks,
  (tasks: Task[], properties: { id: string }) =>
    tasks.filter(task => task.taskListId === properties.id)
);
