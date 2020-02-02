import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';

import * as fromTaskList from '../../task-list/state';
import * as fromTask from '../../task/state';
import * as canbanBoardsActions from '../store/canban-board.actions';
import { selectIsCanbanBoardLoading } from '../store/canban-board.selectors';
import { AppState } from '../../../root-store/reducers';
import { Task } from '../../task/state';
import { reorderStoreEntities } from '../../../shared/utils';

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
      fromTask.addTask({
        task: {
          id: '1',
          name: 'Test',
          taskListId: '1',
          image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          order: 0
        }
      })
    );
    this.store.dispatch(
      fromTask.addTask({
        task: {
          id: '2',
          name: 'Test 2',
          taskListId: '1',
          image:
            'https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
          order: 1
        }
      })
    );
    this.store.dispatch(
      fromTask.addTask({
        task: {
          id: '3',
          name: 'Test 3',
          taskListId: '2',
          image:
            'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/19091354/Weimaraner-puppy-outdoors-with-bright-blue-eyes.20190813165758508-1.jpg',
          order: 2
        }
      })
    );
  }

  trackByFn(index, { id }: fromTaskList.TaskList) {
    return id || index;
  }

  drop({
    previousIndex,
    currentIndex,
    item: { data }
  }: CdkDragDrop<Task[]>): void {
    this.store.dispatch(
      fromTaskList.updateTaskLists({
        taskLists: reorderStoreEntities(data, { previousIndex, currentIndex })
      })
    );
  }
}
