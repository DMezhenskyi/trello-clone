import { TaskList } from './../../task-list/state';

export interface Task {
  id: string;
  name: string;
  taskListId: TaskList['id'];
}
