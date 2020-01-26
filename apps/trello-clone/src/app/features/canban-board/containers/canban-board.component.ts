import { addTask } from './../../task/state/task.actions';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';

import * as fromTaskList from '../../task-list/state';
import * as fromTask from '../../task/state';
import * as canbanBoardsActions from '../store/canban-board.actions';
import { selectIsCanbanBoardLoading } from '../store/canban-board.selectors';
import { AppState } from '../../../root-store/reducers';

@Component({
  selector: 'tc-canban-board',
  templateUrl: './canban-board.component.html',
  styleUrls: ['./canban-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanbanBoardComponent implements OnInit {
  isLoading$: Observable<boolean>;
  taskLists$: Observable<fromTaskList.TaskList[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(canbanBoardsActions.loadCanbanBoards());
    this.isLoading$ = this.store.pipe(select(selectIsCanbanBoardLoading));
    this.taskLists$ = this.store.pipe(select(fromTaskList.selectTaskLists));

    this.store.dispatch(
      fromTask.addTask({ task: { id: '1', name: 'Test', taskListId: '1' } })
    );
  }

  trackByFn(index, { id }: fromTaskList.TaskList) {
    return id || index;
  }

  drop({ previousIndex, currentIndex, item: { data } }: CdkDragDrop<string[]>) {
    moveItemInArray(data, previousIndex, currentIndex);
    const updatedEntities: Update<fromTaskList.TaskList>[] = data.map(
      ({ id }, index) => ({
        id,
        changes: { order: index }
      })
    );
    this.store.dispatch(
      fromTaskList.updateTaskLists({ taskLists: updatedEntities })
    );
  }
}
