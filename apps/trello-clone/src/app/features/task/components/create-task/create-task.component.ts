import { Task } from './../../state/task.model';
import {
  Component,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy,
  Output
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tc-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskComponent implements OnInit {
  @Output()
  readonly addedTask = new EventEmitter<Omit<Task, 'taskListId'>>();

  addTaskForm: FormGroup;

  ngOnInit() {
    this.addTaskForm = new FormGroup({
      taskName: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.addedTask.emit({
      id: String(Date.now()),
      name: this.addTaskForm.controls.taskName.value,
      image:
        'https://www.edhat.com/sites/default/files/news_image/78607152_2415270235249886_7920458153873899520_n.jpg'
    });
    this.addTaskForm.reset();
  }
}
