import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, flatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CanbanBoardActions from './canban-board.actions';
import * as TaskListActions from '../../entity/task-list';

@Injectable()
export class CanbanBoardEffects {
  loadCanbanBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CanbanBoardActions.loadCanbanBoards),
      switchMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        of(null).pipe(
          flatMap(data => [
            TaskListActions.addTaskLists({
              taskLists: [
                { id: '1', name: 'To do' },
                { id: '2', name: 'Doing' },
                { id: '3', name: 'Done' }
              ]
            }),
            CanbanBoardActions.loadCanbanBoardsSuccess({ data })
          ]),
          catchError(error =>
            of(CanbanBoardActions.loadCanbanBoardsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
