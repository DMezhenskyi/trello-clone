import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Tasks } from './tasks.model';
import { TasksActions, TasksActionTypes } from './tasks.actions';

export const tasksFeatureKey = 'tasks';

export interface State extends EntityState<Tasks> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Tasks> = createEntityAdapter<Tasks>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(state = initialState, action: TasksActions): State {
  switch (action.type) {
    case TasksActionTypes.AddTasks: {
      return adapter.addOne(action.payload.tasks, state);
    }

    case TasksActionTypes.UpsertTasks: {
      return adapter.upsertOne(action.payload.tasks, state);
    }

    case TasksActionTypes.AddTaskss: {
      return adapter.addMany(action.payload.taskss, state);
    }

    case TasksActionTypes.UpsertTaskss: {
      return adapter.upsertMany(action.payload.taskss, state);
    }

    case TasksActionTypes.UpdateTasks: {
      return adapter.updateOne(action.payload.tasks, state);
    }

    case TasksActionTypes.UpdateTaskss: {
      return adapter.updateMany(action.payload.taskss, state);
    }

    case TasksActionTypes.DeleteTasks: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TasksActionTypes.DeleteTaskss: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TasksActionTypes.LoadTaskss: {
      return adapter.addAll(action.payload.taskss, state);
    }

    case TasksActionTypes.ClearTaskss: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
