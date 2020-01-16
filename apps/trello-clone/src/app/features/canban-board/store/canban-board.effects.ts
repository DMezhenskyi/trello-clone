import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CanbanBoardActions from './canban-board.actions';

@Injectable()
export class CanbanBoardEffects {
  loadCanbanBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CanbanBoardActions.loadCanbanBoards),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CanbanBoardActions.loadCanbanBoardsSuccess({ data })),
          catchError(error =>
            of(CanbanBoardActions.loadCanbanBoardsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
