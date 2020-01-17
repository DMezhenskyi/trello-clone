import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { selectIsCanbanBoardLoading } from '../store/canban-board.selectors';
import * as canbanBoardsActions from '../store/canban-board.actions';
import { AppState } from '../../../root-store/reducers';
import { TaskList, selectTaskLists } from '../../entity/task-list';

@Component({
  selector: 'tc-canban-board',
  templateUrl: './canban-board.component.html',
  styleUrls: ['./canban-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanbanBoardComponent implements OnInit {
  isLoading$: Observable<boolean>;
  taskLists$: Observable<TaskList[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(selectIsCanbanBoardLoading));
    this.taskLists$ = this.store.pipe(select(selectTaskLists));
  }

  onClick() {
    this.store.dispatch(canbanBoardsActions.loadCanbanBoards());
  }

  onStop() {
    this.store.dispatch(
      canbanBoardsActions.loadCanbanBoardsSuccess({ data: [] })
    );
  }
}
