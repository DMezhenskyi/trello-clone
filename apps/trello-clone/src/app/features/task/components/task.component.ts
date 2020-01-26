import { Task } from './../state/task.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tc-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor() {}

  ngOnInit() {}
}
