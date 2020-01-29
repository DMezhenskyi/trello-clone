import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  OnInit
} from '@angular/core';
import { TaskList } from '../../state';
import { AppState } from './../../../../root-store/reducers/index';
import * as fromTask from '../../../task/state';

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
}
