import { Reordable } from './../../../shared/entity/reordable.model';
import { TaskList } from './../../task-list/state';
import { Entity } from '../../../shared/entity';

export interface Task extends Entity, Reordable {
  taskListId: TaskList['id'];
  image: string;
}
