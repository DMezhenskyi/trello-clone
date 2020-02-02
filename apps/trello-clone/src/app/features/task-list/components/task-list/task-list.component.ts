import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  OnInit
} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { TaskList } from '../../state';
import { AppState } from './../../../../root-store/reducers/index';
import * as fromTask from '../../../task/state';
import { Task } from '../../../task/state';

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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.tasks$ = this.store.pipe(
      select(fromTask.selectTasksForTaskList, { id: this.taskList.id })
    );
  }

  onTaskAdded(newTask: any) {
    const { id } = this.taskList;
    const task = { ...newTask, taskListId: id };
    this.store.dispatch(fromTask.addTask({ task }));
  }

  drop(event: CdkDragDrop<Task>) {
    const task: Update<fromTask.Task> = {
      id: event.item.data.id,
      changes: {
        taskListId: event.container.data.id,
        order: event.currentIndex
      }
    };
    this.store.dispatch(fromTask.updateTask({ task }));
  }
}
