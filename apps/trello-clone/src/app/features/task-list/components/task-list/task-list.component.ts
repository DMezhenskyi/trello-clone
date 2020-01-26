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
import { Task, selectTasksForTaskList } from '../../../task/state';

@Component({
  selector: 'tc-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  @Input() taskList: TaskList;

  @HostBinding('class.tc-task-list') classHost = true;

  tasks$: Observable<Task[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.tasks$ = this.store.pipe(
      select(selectTasksForTaskList, { id: this.taskList.id })
    );
  }
}
