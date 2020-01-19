import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';
import { TaskList } from '../../entity/task-list';

@Component({
  selector: 'tc-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  @Input() taskList: TaskList;

  @HostBinding('class.tc-task-list') classHost = true;

  constructor() {}

  ngOnInit() {}
}
