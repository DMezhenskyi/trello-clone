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

import { TaskList } from '../../state';
import { AppState } from './../../../../root-store/reducers/index';
import * as fromTask from '../../../task/state';
import { Task } from '../../../task/state';
import { reorderStoreEntities } from '../../../../shared/utils';

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

  onTaskAdded(newTask: any) {
    const { id } = this.taskList;
    const task = { ...newTask, taskListId: id };
    this.store.dispatch(fromTask.addTask({ task }));
  }

  trackByFn(index: number, { id }: Task): string | number {
    return id || index;
  }

  drop({
    previousIndex,
    currentIndex,
    container,
    previousContainer,
    item
  }: CdkDragDrop<{ id: string; tasks: fromTask.Task[] }>) {
    if (previousContainer.data.id === container.data.id) {
      moveItemInArray(container.data.tasks, previousIndex, currentIndex);
      this.store.dispatch(
        fromTask.updateTasks({
          tasks: reorderStoreEntities(container.data.tasks)
        })
      );
    } else {
      this.transferTaskToAnotherList(
        previousContainer.data,
        container.data,
        previousIndex,
        currentIndex
      );
      this.setNewListIdForTask({
        id: item.data.id,
        taskListId: container.data.id
      });
    }
  }

  private transferTaskToAnotherList(
    prevTaskList: { id: string; tasks: fromTask.Task[] },
    currTaskList: { id: string; tasks: fromTask.Task[] },
    prevIndex: number,
    currIndex: number
  ) {
    transferArrayItem(
      prevTaskList.tasks,
      currTaskList.tasks,
      prevIndex,
      currIndex
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
  }: Pick<Task, 'id' | 'taskListId'>) {
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
