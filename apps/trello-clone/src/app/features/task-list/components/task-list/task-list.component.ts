import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  OnInit
} from '@angular/core';
import {
  CdkDragDrop,
  transferArrayItem,
  moveItemInArray
} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as fromTask from '@feature/task/state';
import { reorderStoreEntities } from '@shared/utils';
import { TaskList } from '@feature/task-list/state';
import { AppState } from '@root-store/reducers';

interface DropListData {
  id: string;
  tasks: fromTask.Task[];
}

interface TransferData {
  prevTaskList: DropListData;
  currTaskList: DropListData;
  previousIndex: number;
  currentIndex: number;
}

@Component({
  selector: 'tc-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  @Input() taskList: TaskList;

  @HostBinding('class.tc-task-list') classHost = true;

  tasks$: Observable<fromTask.Task[]>;
  taskListData$: Observable<{ id: string; tasks: fromTask.Task[] }>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.tasks$ = this.store.pipe(
      select(fromTask.selectTasksForTaskList, { id: this.taskList.id })
    );
    this.taskListData$ = this.tasks$.pipe(
      map(tasks => ({ id: this.taskList.id, tasks }))
    );
  }

  onTaskAdded(newTask: Omit<fromTask.Task, 'taskListId'>) {
    const { id } = this.taskList;
    const task = { ...newTask, taskListId: id };
    this.store.dispatch(fromTask.addTask({ task }));
  }

  trackByFn(index: number, { id }: fromTask.Task): string | number {
    return id || index;
  }

  drop({
    previousIndex,
    currentIndex,
    container,
    previousContainer,
    item
  }: CdkDragDrop<DropListData>) {
    if (previousContainer.data.id === container.data.id) {
      moveItemInArray(container.data.tasks, previousIndex, currentIndex);
      this.store.dispatch(
        fromTask.updateTasks({
          tasks: reorderStoreEntities(container.data.tasks)
        })
      );
    } else {
      this.transferTaskToAnotherList({
        prevTaskList: previousContainer.data,
        currTaskList: container.data,
        previousIndex,
        currentIndex
      });
      this.setNewListIdForTask({
        id: item.data.id,
        taskListId: container.data.id
      });
    }
  }

  private transferTaskToAnotherList({
    prevTaskList,
    currTaskList,
    previousIndex,
    currentIndex
  }: TransferData) {
    transferArrayItem(
      prevTaskList.tasks,
      currTaskList.tasks,
      previousIndex,
      currentIndex
    );
    this.store.dispatch(
      fromTask.updateTasks({
        tasks: reorderStoreEntities(currTaskList.tasks)
      })
    );
  }

  private setNewListIdForTask({
    id,
    taskListId
  }: Pick<fromTask.Task, 'id' | 'taskListId'>) {
    this.store.dispatch(
      fromTask.updateTask({
        task: {
          id,
          changes: {
            taskListId
          }
        }
      })
    );
  }
}
