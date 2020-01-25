import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsCanbanBoardLoading } from '../store/canban-board.selectors';
import * as canbanBoardsActions from '../store/canban-board.actions';
import { AppState } from '../../../root-store/reducers';
import { TaskList, selectTaskLists } from '../../entity/task-list';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

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
    this.store.dispatch(canbanBoardsActions.loadCanbanBoards());
    this.isLoading$ = this.store.pipe(select(selectIsCanbanBoardLoading));
    this.taskLists$ = this.store.pipe(select(selectTaskLists));
  }

  trackByFn(index, { id }: TaskList) {
    return id || index;
  }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log(event);
  }
}
