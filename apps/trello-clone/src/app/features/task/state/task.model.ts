import { TaskList } from '@feature/task-list/state';
import { Entity, Reordable } from '@shared/entity';

export interface Task extends Entity, Reordable {
  taskListId: TaskList['id'];
  image: string;
}
