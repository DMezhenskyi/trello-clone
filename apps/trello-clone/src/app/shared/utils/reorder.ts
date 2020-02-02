import { Update } from '@ngrx/entity';

import { Entity } from './../entity/entity.model';
import { Reordable, ReorderIndexes } from './../entity/reordable.model';

export function reorderStoreEntities<T extends Entity & Reordable>(
  entities: T[],
  { previousIndex, currentIndex }: ReorderIndexes
): Update<Pick<T, 'order'>>[] {
  const { id: prevPositionId, order: prevOrder } = entities[previousIndex];
  const { id: currPositionId, order: currOrder } = entities[currentIndex];
  return [
    { id: prevPositionId, changes: { order: currOrder } },
    { id: currPositionId, changes: { order: prevOrder } }
  ];
}
