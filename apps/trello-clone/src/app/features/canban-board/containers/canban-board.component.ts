import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';

import * as taskListActions from '../../entity/task-list/task-list.actions';
import * as canbanBoardsActions from '../store/canban-board.actions';
import { selectIsCanbanBoardLoading } from '../store/canban-board.selectors';
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
    this.store.dispatch(canbanBoardsActions.loadCanbanBoards());
    this.isLoading$ = this.store.pipe(select(selectIsCanbanBoardLoading));
    this.taskLists$ = this.store.pipe(select(selectTaskLists));
  }

  trackByFn(index, { id }: TaskList) {
    return id || index;
  }

  drop({ previousIndex, currentIndex, item: { data } }: CdkDragDrop<string[]>) {
    moveItemInArray(data, previousIndex, currentIndex);
    const updatedEntities: Update<TaskList>[] = data.map(({ id }, index) => ({
      id,
      changes: { order: index }
    }));
    this.store.dispatch(
      taskListActions.updateTaskLists({ taskLists: updatedEntities })
    );
  }
}
