import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  routerReducer,
  MinimalRouterStateSnapshot,
  RouterReducerState
} from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import * as fromCanbanBoard from '../../features/canban-board/store/canban-board.reducer';

export interface AppState {
  router: RouterReducerState<MinimalRouterStateSnapshot>;
  [fromCanbanBoard.canbanBoardFeatureKey]?: fromCanbanBoard.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
